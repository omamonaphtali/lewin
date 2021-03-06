import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/products.model';
import { ProductsService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public products: ProductModel[];
  public total: number;

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.prodService.getproducts();
  }
  public getTotal():void {
    this.total = 0;
    for (var i=0; i < 3; i++) {
      this.total += this.products[i].price * this.products[i].quantity;
    }
  }
}
