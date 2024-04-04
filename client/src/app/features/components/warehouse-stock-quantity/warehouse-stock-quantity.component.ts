import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../../models/items.model'; // Adjust path as needed

@Component({
  selector: 'app-warehouse-stock-quantity',
  standalone: true,
  imports: [],
  templateUrl: './warehouse-stock-quantity.component.html',
  styleUrl: './warehouse-stock-quantity.component.css'
})
export class WarehouseStockQuantityComponent implements OnInit {
  @Input() items: Items[] = [];
  @Input() selectedLocationId: number | null = null;

  totalStock: number = 0;
  totalStockAtLocation: number = 0;
  totalPriceOfItems: number = 0;
  totalCrafted: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateTotals();
  }

  ngOnChanges(): void {
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalStock = this.items.reduce((acc, item) => acc + item.quantity, 0);
    this.totalStockAtLocation = this.items
      .filter(item => this.selectedLocationId && item.inventory?.id == this.selectedLocationId)
      .reduce((acc, item) => acc + item.quantity, 0);
    this.totalPriceOfItems = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}
