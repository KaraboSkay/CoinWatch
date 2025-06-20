import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CoinWatch';
  coins: Coin[] = [];
  filteredCoins: Coin[] = [];

  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume',
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .subscribe(res => {
        this.coins = res;
        this.filteredCoins = res;
      }, err => console.log(err));
  }

  // 🔥 This gets called when SearchComponent emits filtered results
  onCoinsFiltered(filtered: Coin[]) {
    this.filteredCoins = filtered;
  }
}
