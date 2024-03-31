import { Component, OnInit } from '@angular/core';
import { RightSidePreviewBoxComponent } from '../../components/right-side-preview-box/right-side-preview-box.component';
import { WarehouseService } from '../../../services/warehouse.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Warehouse } from '../../models/warehouses.model'; // Import HttpClientModule


@Component({
  selector: 'app-custom-package',
  standalone: true,
  imports: [RightSidePreviewBoxComponent, CommonModule, HttpClientModule],
  templateUrl: './custom-package.component.html',
  styleUrl: './custom-package.component.css'
})
export class CustomPackageComponent implements OnInit {
  warehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit() {
    this.warehouseService.getWarehouses().subscribe((data) => {
      this.warehouses = data;
    });
  }
}
