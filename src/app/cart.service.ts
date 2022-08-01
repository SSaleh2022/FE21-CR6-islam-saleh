import { Injectable } from '@angular/core';
import { ITrips } from './ITrips';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:ITrips[]=[];
  sum:number=0;

  constructor() { }
  addToCart(product:ITrips){
    this.items.push(product);
    this.sum+=Number(product.price)

  }
  getItems(){
    return this.items
  }
  clearCart(){
    this.items=[];
    return this.items
  }
  getTotal(){
    return this.sum
  }
  clearTotal(){
    this.sum=0;
    return this.sum
  }

}
