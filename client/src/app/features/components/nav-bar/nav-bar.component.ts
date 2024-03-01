import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatSidenavModule, MatToolbarModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
