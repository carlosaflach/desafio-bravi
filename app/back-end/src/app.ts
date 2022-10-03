import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import userRouter from './routes/UserRoute';
import errorHandler from './middlewares/error.middleware';

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
app.use(cors(options));
app.use(express.json());

app.use('/users', userRouter);
app.use(errorHandler);

export default app;
