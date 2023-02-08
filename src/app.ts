import express from 'express';

import productsRoute from './routes/productsRoute';

import userRouter from './routes/userRoute';

import orderRouter from './routes/orderRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.use('/users', userRouter);

app.use('/orders', orderRouter);

export default app;