import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public total!: number;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.total = 0;
      this.products.forEach((item: any) => {
        this.total += item.quantity * item.price;
      });
      // this.total = +this.cartService.getTotalPrice();
    });
  }

  removeItem(id: any) {
    if (confirm('Are you sure you want to remove this product?'))
      this.cartService.removeCartItem(id).subscribe(() => {
        alert('Item deleted!')
        window.location.reload();
        // this.router.navigateByUrl('cart');
      });
  }
}