import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import UserModel from '../models/UserModel';

const userRouter = Router();

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

userRouter.post('/', userController.create);
userRouter.get('/', userController.read);
userRouter.get('/:id', userController.readOne);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter;