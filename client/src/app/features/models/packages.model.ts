import { Items } from "./items.model";
import { Inventory } from "./inventory.model";

export interface Packages {
    id?: number 
    name: string
    category: string
    image: string
    items?: Items[];
    description: string
    amountCrafted: number 
    isCraftable?: boolean;
    inventory?: Inventory;
  }
