import { Component } from '@angular/core';
import { WarehouseStockQuantityComponent } from '../../components/warehouse-stock-quantity/warehouse-stock-quantity.component';
import { WarehouseTableComponent } from '../../components/warehouse-table/warehouse-table.component';
import { InventoryService } from '../../../services/inventory.service';
import { Inventory } from '../../models/inventory.model';
import { Items } from '../../models/items.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [
    WarehouseStockQuantityComponent,
    WarehouseTableComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css',
})
export class WarehouseComponent {
  constructor(private inventoryService: InventoryService) {}

  Items: Items[] = [];

  searchQuery: string = '';

  FilteredItems: Items[] = [];

  selectedInventoryId: number | null = null;

  ngOnInit() {
    this.inventoryService.getAllItems().subscribe((data) => {
      console.log(data);
      this.Items = data;
      this.FilterItems();
    });
  }

  selectedItem: Items | null = null;

  selectItem(item: Items) {
    this.selectedItem = item;
  }

  updateItem() {
    if (this.selectedItem && this.selectedItem.id !== undefined) {
      this.inventoryService.updateItem(this.selectedItem.id, this.selectedItem).subscribe({
        next: (response) => {
          console.log('Item updated successfully:', response);
          this.ngOnInit();
          this.selectedItem = null;
        },
        error: (error) => {
          console.error('Error updating item:', error);
        }
      });
    }
  }

  FilterItems() {
    const selectedId = Number(this.selectedInventoryId);
    if (selectedId) {
      this.FilteredItems = this.Items.filter(
        (item) => item.inventory?.id == selectedId
      );
    } else {
      this.FilteredItems = [...this.Items];
    }
  }

  searchItems() {
    this.FilteredItems = this.Items.filter(
      (item) => item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
