import { Product } from './../product.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product;

  constructor() { }

}
