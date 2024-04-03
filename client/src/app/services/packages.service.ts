import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Packages } from '../features/models/packages.model';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  

  constructor(private http: HttpClient) {}

  private PackageUrl = 'http://localhost:3000/packages';

  getAllPackages(): Observable<Packages[]> {
    return this.http.get<Packages[]>(this.PackageUrl);
  }

  craftPackage(packages: Packages): Observable<Packages> {
    var CraftUrl = this.PackageUrl + '/' + packages.id + '/craft';
    return this.http.put<Packages>(CraftUrl, {amount: packages.amountCrafted+1, items: packages.items});
  }
}
