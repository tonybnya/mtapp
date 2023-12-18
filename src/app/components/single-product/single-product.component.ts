import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  id!: number;
  product!: any;

  constructor(private api: ApiProductsService) {}

  ngOnInit(): void {
    this.api.getProductById(this.id).subscribe((res) => {
      this.product = res;
    });
  }
}
