import { Request, Response } from 'express';

import UserService from '../services/UserService';

import validateToken from '../middleware/validateToken';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async create(req: Request, res: Response) {
    const { username, vocation, level, password } = req.body;

    const newUser = await this.userService.creation(username, vocation, level, password);

    const token = validateToken(newUser.username, newUser.id);

    res.status(201).send({ token });
  }
}