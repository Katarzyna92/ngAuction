import { Product, ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void { this.products = this.productService.getProducts();
  }

}
