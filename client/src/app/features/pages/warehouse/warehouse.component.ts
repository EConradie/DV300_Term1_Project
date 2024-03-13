import { Component } from '@angular/core';
import { StockQuantityComponent } from '../../components/stock-quantity/stock-quantity.component';
import { WarehouseTableComponent } from '../../components/warehouse-table/warehouse-table.component';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [StockQuantityComponent, WarehouseTableComponent],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css'
})
export class WarehouseComponent {

}
