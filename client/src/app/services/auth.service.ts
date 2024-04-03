// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
    return this.http.post<{message: string, user?: {username: string, isLoggedIn: boolean}}>(this.loginUrl, { phone });
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
