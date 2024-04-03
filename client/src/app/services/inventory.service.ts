import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../features/models/inventory.model';
import { Items } from '../features/models/items.model';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  //Add httpClient functionalliy to service
  constructor(private http: HttpClient) { }

  private inventoryUrl = 'http://localhost:3000/inventory';
  private itemsUrl = 'http://localhost:3000/items';

  //Get all inventory items

  getAllInventory(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.inventoryUrl);
  }

  getAllItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.itemsUrl);
  }

  updateItem(itemId: number, itemData: any): Observable<any> {
    return this.http.put(`${this.itemsUrl}/${itemId}`, itemData);
  }

  getItems(category?: string): Observable<Items[]> {
    const url = category ? `${this.itemsUrl}?category=${category}` : this.itemsUrl;
    return this.http.get<Items[]>(url);
  }

}
