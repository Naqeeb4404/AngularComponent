import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
products = [
  {id:1, name: `Minimalists Analog watch, price: '109', color: 'black',available: 'available', image: */assets/products/product -image-1.jpeg'}
];
}
