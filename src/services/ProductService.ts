import { IProduct } from '../interfaces/productInterface';

import ProductModel from '../models/ProductModel';

import connection from '../models/connection';

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public async creation(name: string, amount: string): Promise<IProduct> {
    const newProduct = await this.productModel.creation(name, amount);

    return newProduct;
  }

  public async findAll(): Promise<IProduct[]> {
    const products = await this.productModel.findAll();

    return products;
  }
}
