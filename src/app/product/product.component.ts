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
  public total: number;

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.prodService.getproducts();
  }
  private getTotal():void {
    this.total = 0;
    for (var i=0; i < 3; i++) {
      this.total += this.products[i].price * this.products[i].quantity;
    }
  }
}
