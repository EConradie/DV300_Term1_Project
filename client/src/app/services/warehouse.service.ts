import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from '../features/models/warehouses.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private apiUrl = 'http://localhost:3000/warehouses';

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.apiUrl);
  }
}



