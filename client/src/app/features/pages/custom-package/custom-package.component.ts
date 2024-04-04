import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../../services/warehouse.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Warehouse } from '../../models/warehouses.model';
import { ItemService } from '../../../services/item.service';
import { Items } from '../../models/items.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-custom-package',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './custom-package.component.html',
  styleUrl: './custom-package.component.css'
})
export class CustomPackageComponent implements OnInit {

  // display warehouses in the dropdownlist
  warehouses: Warehouse[] = [];

  Items: Items[] = [];

  FilteredItems: Items[] = [];

  selectedItems: any = {};

  selectedInventoryId: number | null = null;

  selectedCategoryId: number | null = null;

  constructor(private warehouseService: WarehouseService, private itemService: ItemService) { }

  ngOnInit() {
    this.warehouseService.getWarehouses().subscribe((data) => {
      this.warehouses = data;
    });

    // Fetch all items from the database
    this.itemService.getItems().subscribe((data) => {
      this.Items = data;
      this.FilterItems(); // Optionally filter items right after fetching, based on a pre-selected category or warehouse
    });
  }

  updatePreview() {
    // Logic to update the preview based on selected items
  }

  FilterItems() {
    // Assuming you have a selectedCategoryId to filter by
    const selectedId = Number(this.selectedInventoryId);
    const selectedCategoryId = Number(this.selectedCategoryId);

    if (selectedId) {
      this.FilteredItems = this.Items.filter(
        (item) => item.inventory?.id === selectedId &&
                  (!selectedCategoryId || item.category === selectedCategoryId.toString()) // Filter by category if selectedCategoryId is set
      );
    } else {
      // If no inventory is selected, filter only by category if selectedCategoryId is set
      this.FilteredItems = selectedCategoryId ? this.Items.filter(item => item.category === selectedCategoryId.toString()) : [...this.Items];
    }
  }
}
