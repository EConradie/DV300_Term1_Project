import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/packages.service';
import { Packages } from '../../models/packages.model';
import { CommonModule } from '@angular/common';
import { StockQuantityComponent } from '../../components/stock-quantity/stock-quantity.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-packages-page',
  templateUrl: './packages-page.component.html',
  styleUrls: ['./packages-page.component.css'],
  standalone: true,
  imports: [CommonModule, StockQuantityComponent, FormsModule],
})
export class PackagesPageComponent implements OnInit {
  packages: Packages[] = [];
  filteredPackages: Packages[] = []; // Added to hold the filtered list of packages
  selectedInventoryId: number | null = null;
  selectedPackage?: Packages;
  selectedPackageId: number | null = null;

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(): void {
    this.packageService.getAllPackages().subscribe((data) => {
      this.packages = data;
      this.filteredPackages = [...this.packages]; // Initialize filteredPackages
      console.log('Packages fetched successfully', data);
    });
  }

  setSelectedPackage(packages: Packages) {
    this.selectedPackage = packages;
    this.selectedPackageId = packages.id ?? null;
    this.checkCraftability();
  }

  checkCraftability() {
    if (!this.selectedPackage) return; // Guard clause for null or undefined selectedPackage

    this.selectedPackage.isCraftable = true;
    this.selectedPackage.items?.forEach((item) => {
      if (item.quantity < item.amountNeeded) {
        this.selectedPackage!.isCraftable = false;
        console.log('Not craftable', item.name);
        return;
      }
    });
  }

  craftNewPackage(packages: Packages) {
    if (this.selectedPackage && this.selectedPackage.id === packages.id) {
      this.packageService.craftPackage(packages).subscribe((data) => {
        if (this.selectedPackage) {
          this.selectedPackage.amountCrafted++;
          console.log('Package Crafted', data);
        }
      });
    }
  }

  getTotalPrice(items: any[]): number {
    return items.reduce((acc, item) => acc + item.price, 0);
  }

  FilterPackages() {
    const selectedId = this.selectedInventoryId;
    if (selectedId) {
      this.filteredPackages = this.packages.filter(
        (packageItem) => packageItem.items?.some(item => item.inventory?.id === selectedId)
      );
    } else {
      this.filteredPackages = [...this.packages];
    }
  }
}