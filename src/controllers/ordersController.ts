import { Request, Response } from 'express';

import OrderService from '../services/OrderService';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public async findAll(_req: Request, res: Response): Promise<Response> {
    const ordens = await this.service.findAll();
    return res.status(200).send(ordens);
  }
}