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
    {id:1, name: 'Minimalists Analog watch', price: '109', color: 'black', available: 'available', image: '/assets/products/product -image-1.jpeg'}
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '3999', color: 'black',available: 'available', image: '/assets/products/product -image-2.jpeg'}
    {id:3, name: 'APPLE Iphone 12', price: '1885', color: 'White', available: 'available', image: '/assets/products/product -image-3.jpeg'}
    {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', image: '/assets/products/product -image-4.jpeg'}
    {id:5, name: 'LG Refrigenator with door Cooling', price: '2825', color: 'White', available: 'Not Available', image: '/assets/products/product -image-5.jpeg'}
    {id:6, name: 'DELL Refrigenator One 27 Ryzen', price: '2145', color: 'White', available: 'Available', image: '/assets/products/product -image-6.jpeg'}
];
}
