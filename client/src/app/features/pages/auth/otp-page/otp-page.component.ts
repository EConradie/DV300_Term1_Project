import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css'],
})
export class OtpPageComponent implements AfterViewInit {
  phone: string ;
  code: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.phone = (navigation?.extras.state as any)?.phone;
  }

  @ViewChild('otpInputs') otpInputs!: ElementRef;

  ngAfterViewInit(): void {
    const inputs = this.otpInputs.nativeElement.querySelectorAll('.otp-input');
    inputs.forEach((input: Element) => {
      input.addEventListener('input', (e: any) => {
        const target = e.target;
        const val = target.value;

        if (isNaN(val)) {
          target.value = '';
          return;
        }

        if (val !== '') {
          const next = target.nextElementSibling;
          if (next) {
            next.focus();
          }
        }
        this.updateCode(); // Update the code after each input
      });

      input.addEventListener('keyup', (e: any) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
          const target = e.target;
          target.value = '';
          const prev = target.previousElementSibling;
          if (prev) {
            prev.focus();
          }
        }
        this.updateCode(); // Update the code after each deletion
      });
    });
  }

  updateCode(): void {
    const inputs = this.otpInputs.nativeElement.querySelectorAll('.otp-input');
    this.code = Array.from(inputs)
      .map((input: any) => input.value)
      .join('');
    console.log(this.code);
  }

  onSubmit() {
    this.authService.verifyOtp(this.phone, this.code).subscribe({
      next: (response: any) => {
        if (response.message.includes("logged in")) {
          // User already signed up and logged in
          this.router.navigate(['/']); // Adjust as needed
        } else if (response.message.includes("signup")) {
          // New user, proceed to signup
          this.router.navigate(['/signup'], { state: { phone: this.phone } });
        }
      },
      error: (error) => {
        console.error('Verification error:', error);
        alert('Verification failed. Please try again.');
      }
    });
  }
}
