import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public total!: number;
  public productsOrder: any;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((item)=>{
      this.productsOrder = item;
      this.calculateTotal();
    })
  }

  calculateTotal(): void {
    this.total = 0;
    this.productsOrder.forEach((item:any)=>{
      this.total += item.quantity * item.price;
    })
  }
}
