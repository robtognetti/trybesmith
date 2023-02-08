import express from 'express';

import OrderController from '../controllers/ordersController';

const router = express.Router();

const order = new OrderController();

router.get('/', (req, res) => order.findAll(req, res));

export default router;