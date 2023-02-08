import { IOrder } from '../interfaces/orderInterface';

import OrderModel from '../models/OrderModel';

import connection from '../models/connection';

export default class OrderService {
  constructor(private orderModels = new OrderModel(connection)) { }

  public async findAll(): Promise<IOrder[]> {
    const orders = await this.orderModels.findAll();
    
    return orders;
  }
}