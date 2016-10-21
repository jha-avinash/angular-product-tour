import { Component, OnInit } from '@angular/core';

import {Product} from './product';
import {ProductService} from './product.service';



@Component({
  selector: 'my-app',
  templateUrl: './app/product-component/product-list.html',
  providers: [ProductService]
})

export class AppComponent implements OnInit{

title = 'Product Tour';
  products : Product [];
  selectedProduct: Product;


  constructor(private productService: ProductService){};

getProducts():void {
 this.productService.getProducts().then(products => this.products = products);;
}

ngOnInit():void{
  this.getProducts();
}
  
  onSelect(product : Product): void {
    this.selectedProduct = product;
    
  }

 }
