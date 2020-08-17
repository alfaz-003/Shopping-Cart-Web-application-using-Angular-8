import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  p:Products[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.p = this.productService.getProducts()
  }

}
