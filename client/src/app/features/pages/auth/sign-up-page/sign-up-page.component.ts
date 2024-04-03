import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  username: string = '';
  image: string = 'default.jpg';
  phone: string ;
  isLoggedIn: boolean = true;

  constructor(private authService: AuthService, private router: Router, private SessionService: SessionService ) {
    const navigation = this.router.getCurrentNavigation();
    this.phone = (navigation?.extras.state as any)?.phone;
  }

  onSubmit(): void {
    if (this.username && this.phone) {
      this.authService
        .createUser(this.username, this.phone, this.image, this.isLoggedIn)
        .subscribe({
          next: (response) => {
            console.log('User created successfully', response);
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', this.username);
            sessionStorage.setItem('image', this.image);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Error creating user:', error);
            sessionStorage.clear;
          },
        });
    }
  }
}
