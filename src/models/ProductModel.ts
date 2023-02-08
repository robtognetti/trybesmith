import { Pool, ResultSetHeader } from 'mysql2/promise';

import { IProduct } from '../interfaces/productInterface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async creation(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const newProduct = {
      id: insertId,
      name,
      amount,
    };

    return newProduct;
  }

  public async findAll(): Promise<IProduct[]> {
    const queryAll = 'SELECT * FROM Trybesmith.products';

    const [products] = await this.connection.execute(queryAll);

    return products as IProduct[];
  }
}