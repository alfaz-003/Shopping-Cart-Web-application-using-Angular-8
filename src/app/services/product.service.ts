import { Injectable } from '@angular/core';

import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

//To fetch product data from db use API

  product : Products[] = [
  new Products(1, 'p 1', 300,'Des 1'),
  new Products(2, 'p 2', 100,'Des 2','assets/3.png'),
  new Products(3, 'p 3', 150,'Des 3','assets/T5.png'),
  new Products(4, 'p 4', 500,'des 4','assets/t8.png'),
  new Products(5, 'p 5', 300,'des 5','assets/t3.png'),
  new Products(6, 'p 6', 175,'des 5'),
  new Products(7, 'p 7', 175,'des 5','assets/t6.png'),
  new Products(8, 'p 8', 175,'des 5','assets/t7.png'),
    
  ] 
  constructor() { }

  getProducts():Products[]{
    return this.product
  }
}
