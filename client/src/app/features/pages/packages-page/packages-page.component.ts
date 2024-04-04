import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/packages.service';
import { Packages } from '../../models/packages.model';
import { CommonModule } from '@angular/common';
import { StockQuantityComponent } from '../../components/stock-quantity/stock-quantity.component';

@Component({
  selector: 'app-packages-page',
  templateUrl: './packages-page.component.html',
  styleUrls: ['./packages-page.component.css'],
  standalone: true,
  imports: [CommonModule, StockQuantityComponent],
})
export class PackagesPageComponent {
  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.getPackages();
  }

  packages: Packages[] = [];

  getPackages(): void {
    this.packageService.getAllPackages().subscribe((data) => {
      this.packages = data;
      console.log('Packages fetched successfully', data);
    });
  }

  //Set active recipe
  selectedPackage?: Packages;
  setSelectedPackage(packages: Packages) {
    this.selectedPackage = packages;

    this.checkCraftability();
  }

  checkCraftability() {
    this.selectedPackage!.isCraftable = true;

    this.selectedPackage!.items?.forEach((item) => {
      if (item.quantity < item.amountNeeded) {
        this.selectedPackage!.isCraftable = false;
        console.log('Not craftable' + item.name);
        return;
      }
    });
  }

  craftNewPackage(packages: Packages) {
    if (this.selectedPackage!.id == packages.id) {
      this.packageService.craftPackage(packages).subscribe((data) => {
        this.selectedPackage!.amountCrafted++;
        console.log('Package Crafted', data);
      });
    }
  }

  getTotalPrice(items: any[]): number {
    return items.reduce((acc, item) => acc + item.price, 0);
  }
}

