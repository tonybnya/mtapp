import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public total!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.total = +this.cartService.getTotalPrice();
    });
  }

  removeItem(product: any) {
    if (confirm('Are you sure you want to remove this product?'))
      this.cartService.removeCartItem(product);
  }
}