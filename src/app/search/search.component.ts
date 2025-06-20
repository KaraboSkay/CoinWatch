import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

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
export class SearchComponent implements OnInit, OnChanges {

  @Input() coins: Coin[] = [];
  @Output() coinsFiltered = new EventEmitter<Coin[]>();

  searchText: string = '';
  filteredCoins: Coin[] = [];

  ngOnInit(): void {
    this.filteredCoins = this.coins;
    this.coinsFiltered.emit(this.filteredCoins);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['coins']) {
      this.filteredCoins = this.coins;
      this.coinsFiltered.emit(this.filteredCoins);
    }
  }

  searchCoin(): void {
    const query = this.searchText.toLowerCase().trim();
    this.filteredCoins = this.coins.filter(coin =>
      coin.name.toLowerCase().includes(query) ||
      coin.symbol.toLowerCase().includes(query)
    );
    this.coinsFiltered.emit(this.filteredCoins);
  }
}
