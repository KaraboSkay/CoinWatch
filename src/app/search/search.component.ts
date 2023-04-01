import { Component, Input, OnInit } from '@angular/core';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() coins: Coin[] = [];
  @Input() filteredCoins:  Coin[] = [];

  searchText = ''
  
  searchCoin() {
    console.log('searchCoin function called');
    console.log('searchText: ', this.searchText);
    console.log('coins: ', this.coins);
    console.log('filteredCoins: ', this.filteredCoins);

    this.filteredCoins = this.coins.filter(coin =>
      coin.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  constructor() { }

  ngOnInit(): void {

  }

  }
