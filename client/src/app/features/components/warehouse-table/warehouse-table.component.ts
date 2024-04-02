import { Component, Input } from '@angular/core';
import { Items } from '../../models/items.model';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-warehouse-table',
  standalone: true,
  imports: [],
  templateUrl: './warehouse-table.component.html',
  styleUrl: './warehouse-table.component.css',
})
export class WarehouseTableComponent {
  constructor(private inventoryService: InventoryService) {}

  @Input() item: Items = {
    id: 0,
    name: 'Test',
    category: 'Test',
    brand: 'Test',
    price: 0,
    quantity: 0,
    model: 'Test',
    icon: 'Test',
  };
}
