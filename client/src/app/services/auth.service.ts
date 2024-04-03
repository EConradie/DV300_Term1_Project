// src/app/auth.service.ts
import { Injectable, Inject, PLATFORM_ID  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {}

  private sendOtpUrl = 'http://localhost:3000/send-otp';
  private verifyOtpUrl = 'http://localhost:3000/verify-otp';
  private createUserUrl = 'http://localhost:3000/users/create';
  private loginUrl = 'http://localhost:3000/users/login';

  

  sendOtp(phone: string) {
    return this.http.post(this.sendOtpUrl, { phone });
  }

  verifyOtp(phone: string, code: string) {
    return this.http.post(this.verifyOtpUrl, { phone, code });
  }

  login(phone: string) {
    return this.http.post<{user: {username: string}}>(this.loginUrl, { phone });
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!sessionStorage.getItem('isLoggedIn');
    }
    return false;
  }

  createUser( username: string, phone: string, image: string, isLoggedIn: boolean) {
    const body = {
      username,
      phone,
      image,
      isLoggedIn
    };

    return this.http.post<any>(this.createUserUrl, body,{
      headers: { 'Content-Type': 'application/json' }
    });
  }

}
