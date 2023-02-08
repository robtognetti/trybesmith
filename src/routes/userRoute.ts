import express from 'express';

import UserController from '../controllers/usersController';

const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/', (req, res) => userController.create(req, res));

export default userRouter;