import { Component } from '@angular/core';
import { StockQuantityComponent } from '../../components/stock-quantity/stock-quantity.component';

@Component({
  selector: 'app-packages-page',
  standalone: true,
  imports: [StockQuantityComponent],
  templateUrl: './packages-page.component.html',
  styleUrl: './packages-page.component.css'
})
export class PackagesPageComponent {

}
