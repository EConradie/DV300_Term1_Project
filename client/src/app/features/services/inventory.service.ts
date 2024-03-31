import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory.model';
import { Items } from '../models/items.model';


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

  //Update inventory amount
  updateItem(id: number, updatedItem: Items): Observable<Items> {
    return this.http.put<Items>(`${this.itemsUrl}/${id}`, { item: updatedItem });
  }

}
