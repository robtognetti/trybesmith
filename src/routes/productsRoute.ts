import express from 'express';

import ProductsController from '../controllers/productsController';

const router = express.Router();

const products = new ProductsController();

router.get('/', (req, res) => products.findAll(req, res));

router.post('/', (req, res) => products.create(req, res));

export default router;