import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products/products.module';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page: number = 1;
  public products!: Products[];
  isAdded: boolean = false;

  constructor(private api: ApiProductsService, private cartService: CartService, private router: Router, private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
      this.products.forEach((product: any) => {
        Object.assign(product, { quantity: 1, total: product.price });
      });
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.router.navigateByUrl('cart');
  }

  addToWishlist(itemProduct: number) {
    this.wishlistService.addToWishlist(itemProduct).subscribe(() => {
      this.isAdded = true;
    });
  }

  removeFromWishlist() {
    this.isAdded = false;
  }
}
