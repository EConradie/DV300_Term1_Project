import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private apiUrl = 'http://localhost:3000/packages';

  constructor(private http: HttpClient) { }

  getPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add this method
  craftRecipe(recipe: any): Observable<any> {
    // Replace 'your_api_endpoint' with the actual endpoint where the recipe crafting is handled
    return this.http.post('your_api_endpoint', recipe);
  }
}

