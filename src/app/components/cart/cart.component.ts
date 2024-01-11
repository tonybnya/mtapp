import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

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
    this.getProductsCart();
  }

  getProductsCart() {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.total = 0;
      this.products.forEach((item: any) => {
        this.total += item.quantity * item.price;
      });
      // this.total = +this.cartService.getTotalPrice();
    })   
  }
  removeItem(id: any) {
    Swal.fire({
      title: "Are you sure you want to remove this product?",
      showCancelButton: true,
      confirmButtonText: "Remove",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.cartService.removeCartItem(id).subscribe(() => {
          Swal.fire("Item deleted!!", "", "success");
          this.getProductsCart();
        });
      }
    });
  }
}