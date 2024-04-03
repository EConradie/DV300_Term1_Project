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
export class PackagesPageComponent implements OnInit {
  packages: Packages[] = [];
  selectedPackage?: Packages;

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(): void {
    this.packageService.getAllPackages().subscribe({
      next: (data) => {
        this.packages = data.map((pkg) => ({
          ...pkg,
          isCraftable: this.isCraftable(pkg), // Dynamically calculate craftability
        }));
      },
      error: (error) => console.error('Error fetching packages:', error),
    });
  }

  isCraftable(pkg: Packages): boolean {
    // Assuming each package item's quantity needs to be at least 1 to craft the package
    return pkg.items?.every((item) => item.quantity > 0) ?? false;
  }

  craftPackage(pkg: Packages): void {
    if (pkg.id === undefined) {
      console.error('Package id is undefined.');
      return;
    }
  
    if (!pkg.isCraftable) {
      console.error('Package is not craftable due to insufficient item quantities.');
      return;
    }
    
    this.packageService.craftPackage(pkg.id).subscribe({
      next: (updatedPackage) => {
        this.selectedPackage = updatedPackage;
        this.getPackages();
        console.log('Package crafted successfully', updatedPackage);
      },
      error: (error) => console.error('Error crafting package:', error),
    });
  }

  setSelectedPackage(pkg: Packages): void {
    this.selectedPackage = {
      ...pkg,
      isCraftable: this.isCraftable(pkg),
    };
  }
}
