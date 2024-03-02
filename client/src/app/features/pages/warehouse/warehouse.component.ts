import { Component } from '@angular/core';
import { StockQuantityComponent } from '../../components/stock-quantity/stock-quantity.component';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [StockQuantityComponent],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css'
})
export class WarehouseComponent {

}
