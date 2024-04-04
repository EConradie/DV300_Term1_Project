import { Component, Input, OnInit } from '@angular/core';
import { Packages } from '../../models/packages.model';

@Component({
  selector: 'app-stock-quantity',
  standalone: true,
  imports: [],
  templateUrl: './stock-quantity.component.html',
  styleUrl: './stock-quantity.component.css'
})
export class StockQuantityComponent {
  @Input() packages: Packages[] = []
  @Input() selectedPackageId: number | null = null

  totalPackages: number = 0;
  totalCrafted: number = 0;
  totalRevenue: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateTotals();
  }

  ngOnChanges(): void {
    this.calculateTotals();
  }

  calculateTotals(): void {
    if (this.selectedPackageId !== null) {
      const selectedPackage = this.packages.find(pkg => pkg.id === this.selectedPackageId);
      if (selectedPackage) {
        this.totalPackages = this.packages.length;
        this.totalCrafted = selectedPackage.amountCrafted ;
        this.totalRevenue = selectedPackage.items?.reduce((acc, item) => acc + (item.price * this.totalCrafted), 0) || 0; 
      } else {
        this.totalPackages = this.packages.length;
        this.totalCrafted = 0;
        this.totalRevenue = 0;
      }
    } else {
      this.totalPackages = this.packages.length;
      this.totalCrafted = this.packages.reduce((acc, pkg) => acc + pkg.amountCrafted, 0);
      this.totalRevenue = this.packages.reduce((acc, pkg) => {
        const packageRevenue = pkg.items?.reduce((itemAcc, item) => itemAcc + item.price, 0) || 0;
        return acc + (packageRevenue * pkg.amountCrafted);
      }, 0);
    }
  }
}
