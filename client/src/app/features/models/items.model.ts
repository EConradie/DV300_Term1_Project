import { Inventory } from "./inventory.model"
import { Packages } from "./packages.model"


export interface Items {
    id?: number 
    name: string
    category: string
    brand: string
    price: number
    quantity: number
    model: string
    icon: string
    package?: Packages
    inventory?: Inventory
    amountNeeded: number
  }