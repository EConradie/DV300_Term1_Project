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
  filteredPackages: Packages[] = [];
  selectedInventoryId: number | null = 1;
  selectedPackage?: Packages | null;
  selectedPackageId: number | null = null;

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.getPackages();
    this.FilterPackages();
  }

  getPackages(): void {
    this.packageService.getAllPackages().subscribe((data) => {
      this.packages = data;
      this.filteredPackages = [...this.packages]; 
      this.FilterPackages();
      console.log('Packages fetched successfully', data);
    });
  }

  setSelectedPackage(packages: Packages) {
    this.selectedPackage = packages;
    this.selectedPackageId = packages.id ?? null;
    this.checkCraftability();
  }

  checkCraftability() {
    if (!this.selectedPackage) return; 

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
          this.ngOnInit();
          this.selectedPackage = null;
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
        (packageItem) => packageItem.inventory?.id == selectedId
      );
    } else {
      this.filteredPackages = [...this.packages];
    }

    this.filteredPackages.sort((a, b) => a.name.localeCompare(b.name));
  }

  getSelectedLocationName(): string {
    const mapping: { [key: number]: string } = {
      '1': 'Johannesburg',
      '2': 'Cape Town',
      '3': 'Durban'
    };
    return this.selectedInventoryId !== null ? mapping[this.selectedInventoryId] : 'All';
  }
}
