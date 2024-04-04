import { Items } from "./items.model";

export interface Packages {
    id?: number 
    name: string
    category: string
    image: string
    items?: Items[];
    description: string
    amountCrafted: number 
    isCraftable?: boolean;
  }
