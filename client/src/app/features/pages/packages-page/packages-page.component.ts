import { Component } from '@angular/core';
import { StockQuantityComponent } from '../../components/stock-quantity/stock-quantity.component';
import { RightSidePreviewBoxComponent } from '../../components/right-side-preview-box/right-side-preview-box.component';
import { PackagesCardsComponent } from '../../components/packages-cards/packages-cards.component';

@Component({
  selector: 'app-packages-page',
  standalone: true,
  imports: [StockQuantityComponent, RightSidePreviewBoxComponent, PackagesCardsComponent],
  templateUrl: './packages-page.component.html',
  styleUrl: './packages-page.component.css'
})
export class PackagesPageComponent {

}
