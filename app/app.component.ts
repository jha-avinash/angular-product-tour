import { Component } from '@angular/core';
export class Product{
  id:number;
  name: string;
}
const PRODUCTS: Product [] = [
  { id: 11, name: 'Broccoli' },
  { id: 12, name: 'Potato' },
  { id: 13, name: 'Olive Oil' },
  { id: 14, name: 'Beans' },
  { id: 15, name: 'Avocado' },
  { id: 16, name: 'Banana' },
  { id: 17, name: 'Salsa' },
  { id: 18, name: 'Salad' },
  { id: 19, name: 'Lassi' },
  { id: 20, name: 'Tomato' }
];

@Component({
  selector: 'my-app',
  templateUrl: './app/product-component/product-detail.html'
})
export class AppComponent {
  title = 'Product Tour';
  products = PRODUCTS;
  selectedProduct: Product;

  onSelect(product : Product): void {
    this.selectedProduct = product;
  }

 }
