import { IUser } from '../interfaces/userInterface';

import UserModel from '../models/UserModel';

import connection from '../models/connection';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async creation(
    username:string, 
    vocation:string, 
    level:number, 
    password:string,
  )
    :Promise<IUser> {
    const user = await this.model.creation(username, vocation, level, password);

    return user;
  }
}