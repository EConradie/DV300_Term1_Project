import { Component } from '@angular/core';
import { StockQuantityComponent } from '../../components/stock-quantity/stock-quantity.component';
import { RightSidePreviewBoxComponent } from '../../components/right-side-preview-box/right-side-preview-box.component';
import { PackagesCardsComponent } from '../../components/packages-cards/packages-cards.component';
import { Packages } from '../../models/packages.model';
import { ItemService } from '../../../services/item.service';
import { PackagesService } from '../../../services/packages.service';
import { Items } from '../../models/items.model';
import { CommonModule } from '@angular/common';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-packages-page',
  standalone: true,
  imports: [StockQuantityComponent, RightSidePreviewBoxComponent, PackagesCardsComponent],
  templateUrl: './packages-page.component.html',
  styleUrl: './packages-page.component.css'
})
export class PackagesPageComponent {

  // packages: any[] = [];
  // items: any[] = [];
  // selectedRecipe: any; // Added as per instructions

  // constructor(private packagesService: PackagesService, private itemsService: ItemsService) { }

  // ngOnInit() {
  //   this.packagesService.getPackages().subscribe({
  //     next: (data) => {
  //       this.packages = data;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching packages:', error);
  //     }
  //   });
  // }

  // //SET ACTIVE RECIPE
  // selectedItem?: Items;
  // setSelectedRecipe(recipe: Items) {
  //   this.selectedItem = recipe;

  //   this.checkCraftability();
  // }

  // checkCraftability() {
  //   this.selectedItem!.ingredients?.forEach((items) => {
  //     if (items.inventory?.amount === undefined || items.inventory.amount < items.amountNeeded) {
  //       this.selectedItem!.isCraftable = false;
  //       console.log('Not craftable' + items.inventory?.items);
  //     }
  //   });
  // }

  // craftNewRecipe(selectedPackage: Packages) {
  //   if (this.selectedItem!.id == selectedPackage.id) {
  //     //making sure the right recipe is selected
  //     this.itemsService.craftPackage(selectedPackage).subscribe((data) => {
  //       this.selectedItem!.amountCrafted++;
  //       console.log("Recipe Crafted", data);
  //     });
  //   }
  // }

  // trackByFn(_: any, item: any) {
  //   return item.id; // Replace 'id' with the unique identifier property of your items
  // }
}
