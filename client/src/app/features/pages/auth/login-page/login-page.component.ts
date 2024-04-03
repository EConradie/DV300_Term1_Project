import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Step 2: Import FormsModule

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  phone: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.phone).subscribe({
      next: (response) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', response.user.username);
        this.router.navigate(['/']);
      },
      error: (error) => {
        if (error.status === 404) {
          // User not found, start OTP process
          this.startOtpProcess();
        } else {
          console.error('Login error:', error);
          alert('An error occurred. Please try again.');
        }
      },
    });
  }

  startOtpProcess(): void {
    this.authService.sendOtp(this.phone).subscribe({
      next: () => {
        // OTP sent successfully, navigate to OTP verification page
        this.router.navigate(['/otp'], { state: { phone: this.phone } });
      },
      error: (error) => {
        console.error('Error sending OTP:', error);
        alert('Failed to send OTP. Please try again.');
      },
    });
  }
}
