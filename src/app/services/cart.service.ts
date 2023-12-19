import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getProducts() {
    return this.productList.asObservable();
  }

  getTotalPrice(): number {
    let cartTotal = 0;
    this.cartItemList.map((product: any) => {
      cartTotal += +product.price;
    });
    return cartTotal;
  }

  removeCartItem(id: any) {
    this.cartItemList.map((product: any, index: any) => {
      this.cartItemList.splice(index, 1);
    });
    this.productList.next(this.cartItemList);
  }
}