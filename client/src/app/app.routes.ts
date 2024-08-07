import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/pages/landing-page/landing-page.component'; 
import { PackagesPageComponent } from './features/pages/packages-page/packages-page.component';
import { CustomPackageComponent } from './features/pages/custom-package/custom-package.component';
import { WarehouseComponent } from './features/pages/warehouse/warehouse.component';
import { LoginPageComponent } from './features/pages/auth/login-page/login-page.component';
import { OtpPageComponent } from './features/pages/auth/otp-page/otp-page.component'; 
import { SignUpPageComponent } from './features/pages/auth/sign-up-page/sign-up-page.component';
import { AuthGuard } from './features/guards/auth.guard'; 

export const routes: Routes = [
    { path: 'dashboard', component: LandingPageComponent, canActivate: [AuthGuard] }, 
    { path: 'packages', component: PackagesPageComponent, canActivate: [AuthGuard] }, 
    { path: 'custompackage', component: CustomPackageComponent, canActivate: [AuthGuard] }, 
    { path: 'warehouse', component: WarehouseComponent, canActivate: [AuthGuard] }, 
    { path: 'login', component: LoginPageComponent },
    { path: 'otp', component: OtpPageComponent },
    { path: 'signup', component: SignUpPageComponent },
    { path:'', redirectTo: 'dashboard', pathMatch: 'full' }, 
];
