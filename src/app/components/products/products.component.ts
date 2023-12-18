import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from 'src/app/services/api-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: any;

  constructor(private api: ApiProductsService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
