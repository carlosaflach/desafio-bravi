import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import userRouter from './routes/UserRoute';
import errorHandler from './middlewares/error.middleware';

const app = express();
app.use(express.json());
app.use(cors())

app.use('/users', userRouter);
app.use(errorHandler);

export default app;
