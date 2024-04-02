import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //Influences our behaviour
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  //https url
  private loginUrl = 'http://localhost:3000/users/login';

  //Login
  loginUser(email: string, password: string): Observable<boolean> {
    //Make http request, receive the response of user info, save user info to session
    return this.http.post<any>(this.loginUrl, { email, password }).pipe(
      tap((response) => {
        if (response) {
          console.log(response);
          sessionStorage.setItem('currentUser', JSON.stringify(response));
          this.isLoggedIn.next(true);
        }
      })
    );
  }

  //Logout
  logout() {
    sessionStorage.removeItem('currentUser');
    this.isLoggedIn.next(false); //Set state false
  }

  //returns the logged in user info
  checkCurrentUserLoggedIn(): boolean {
    var user = JSON.parse(sessionStorage.getItem('currentUser')!);

    if (user) {
      this.isLoggedIn.next(true);
      return true;
    } else {
      this.isLoggedIn.next(false);
      return false;
    }
  }

  //Check if user is logged - for UI
  checkIfLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser')!);
  }
}
