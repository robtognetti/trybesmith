import { Pool, RowDataPacket } from 'mysql2/promise';

export default class OrderModel {
  static findAll() {
    throw new Error('Method not implemented.');
  }

  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAll() {
    const queryAll = 'SELECT * FROM Trybesmith.orders';
    
    const [result] = await this.connection.execute<RowDataPacket[]>(queryAll);

    const orders = await Promise.all(
      result.map(async ({ id, user_id: userId }) => {
        const queryIds = `SELECT id FROM Trybesmith.products 
        WHERE order_id = ?`;

        const [data] = await this.connection.execute<
        RowDataPacket[] & { id: number }[]
        >(queryIds, [id]);

        const productsIds: number[] = data.map((el: { id: number }) => el.id);

        return { id, userId, productsIds };
      }),
    );

    return orders;
  }
}