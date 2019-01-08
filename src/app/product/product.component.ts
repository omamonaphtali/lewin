import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/products.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: ProductModel[];

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.prodService.getproducts();
  }

}
