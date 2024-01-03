import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from 'src/app/services/api-products.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  // id!: number;
  product!: any;
  isAdded: boolean = false;

  constructor(private api: ApiProductsService, private route: ActivatedRoute, private router: Router, private cartService: CartService, private wishlistService: WishlistService ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.api.getProductById(id).subscribe((res) => {
      this.product = res;
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
