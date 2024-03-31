import { Items } from "./items.model";

export interface Packages {
    id?: number 
    name: string
    category: string
    price: number
    quantity: number
    date: Date
    image: string
    items?: Items
    description: string
    amountCrafted: number
  }