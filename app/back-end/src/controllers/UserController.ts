import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IUser } from '../interfaces/IUser';

export default class UserController {
  constructor(private _service: IService<IUser>) {}

  public create = async (req: Request, res: Response<IUser>) => {
    const { name, age, email, phoneNumber, celNumber, address, password } = req.body;

    const user = { name, age, email, phoneNumber, celNumber, address, password }

    const serviceResponse = await this._service.create(user);

    return res.status(201).json(serviceResponse);
  };

  public read = async (req: Request, res: Response<IUser[]>) => {
    const users = await this._service.read();
    return res.status(200).json(users);
  }

  public readOne = async (req: Request, res: Response<IUser>) => {
    const { id } = req.params;

    const user = await this._service.readOne(id);

    return res.status(200).json(user);
  }

  public update = async (req: Request, res: Response<IUser | null>) => {
    const { id } = req.params;

    const updatedUser = await this._service.update(id, req.body);

    return res.status(200).json(updatedUser);
  }

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.delete(id);

    return res.status(204).end();
  }
}