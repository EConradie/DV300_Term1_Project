import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Packages } from '../features/models/packages.model';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  private baseUrl = 'http://localhost:3000/packages';

  constructor(private http: HttpClient) {}

  getAllPackages(): Observable<Packages[]> {
    return this.http.get<Packages[]>(this.baseUrl);
  }

  craftPackage(packageId: number): Observable<Packages> {
    return this.http.put<Packages>(`${this.baseUrl}/${packageId}/craft`, {});
  }
}
