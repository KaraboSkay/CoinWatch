import { Component , Input } from '@angular/core';

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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() coins: Coin[] = [];
  @Input() filteredCoins:  Coin[] = [];
  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume',
  ];

  constructor() { }

}
