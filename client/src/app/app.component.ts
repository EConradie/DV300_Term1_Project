import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './features/components/nav-bar/nav-bar.component'; 
import { TopBarComponent } from './features/components/top-bar/top-bar.component';
import { LandingPageComponent } from './features/pages/landing-page/landing-page.component'; 
import { PackagesPageComponent } from './features/pages/packages-page/packages-page.component';
import { CustomPackageComponent } from './features/pages/custom-package/custom-package.component';
import { WarehouseComponent } from './features/pages/warehouse/warehouse.component';
import { LoginPageComponent } from './features/pages/auth/login-page/login-page.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavbarComponent, TopBarComponent ,LandingPageComponent, PackagesPageComponent, CustomPackageComponent, WarehouseComponent, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Client';

}
