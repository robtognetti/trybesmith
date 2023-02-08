import { Pool, ResultSetHeader } from 'mysql2/promise';

import { IUser } from '../interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async creation(
    username: string, 
    vocation: string,
    level: number, 
    password: string,
  ): Promise<
    IUser> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const user = {
      id: insertId,
      username,
      vocation,
      level,
      password,
    };

    return user;
  }
}