import { ProductModel } from "../models/products.model";

export class ProductsService {
  private products: ProductModel[];

  constructor () {
    this.products = [
      {id: 1, name: 'Cement', price: 500, photoUrl: '', quantity: 0},
      {id: 2, name: 'Roofing Tiles', price: 500, photoUrl: '', quantity: 0},
      {id: 3, name: 'Stones', price: 500, photoUrl: '', quantity: 0},
      // {id: 1, name: '', price: 500, photoUrl: ''},
      // {id: 1, name: '', price: 500, photoUrl: ''},
    ];
  }

  getproducts(): ProductModel[] {
    return this.products;
  }

  get(pk: number): ProductModel {
    return this.products[this.getSelectedIndex(pk)];
}

private getSelectedIndex(pk: number) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == pk) {
            return i;
        }
    }
    return -1;
  }
}