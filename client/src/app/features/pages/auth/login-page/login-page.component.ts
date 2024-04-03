import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Step 2: Import FormsModule


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  phone: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.phone).subscribe({
      next: (response) => {
        if (response.user && response.user.isLoggedIn) {
          this.router.navigate(['/']);
          sessionStorage.setItem('isLoggedIn', 'true'); 
          sessionStorage.setItem('username', response.user.username);
        } else {
          this.router.navigate(['/otp'], { state: { phone: this.phone } });

        }
      },
      error: (error) => {
        console.error('Login error:', error);
        alert('An error occurred. Please try again.');
        sessionStorage.clear();
      }
    });
  }
}
