// src/app/services/session.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() { }

  setUsername(username: string) {
    sessionStorage.setItem('username', username);
  }

  getUsername(): string | null {
    return sessionStorage.getItem('username');
  }

  setIsLoggedIn(isLoggedIn: boolean) {
    sessionStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }

  getIsLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  setImage(image: string) {
    sessionStorage.setItem('image', image);
  }

  getImage(): string | null {
    return sessionStorage.getItem('image'); 
  }

  clearSession() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('image');
  }
}
