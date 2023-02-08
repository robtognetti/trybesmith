import { Request, Response } from 'express';

import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public async create(req: Request, res: Response) {
    const { name, amount } = req.body;
    const id = await this.productService.creation(name, amount);

    return res.status(201).send({ id, name, amount });
  }

  public async findAll(_req: Request, res: Response): Promise<Response> {
    const products = await this.productService.findAll();

    return res.status(200).send(products);
  }
}