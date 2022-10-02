import IService from '../interfaces/IService';
import { IUser, UserZodSchema } from '../interfaces/IUser';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class UserService implements IService<IUser> {
  private _userModel: IModel<IUser>;

  constructor(model: IModel<IUser>) {
    this._userModel = model;
  }

  public async create(obj: IUser):Promise<IUser> {
    const user = this._userModel.findOne(obj.email) as unknown;
    if(user) throw new Error(ErrorTypes.AlreadyRegistered);

    const parsed = UserZodSchema.safeParse(obj);

    if(!parsed.success) {
      throw parsed.error;
    }

    return this._userModel.create(parsed.data);
  }

  public async read():Promise<IUser[]> {
    const users = await this._userModel.read();
    return users;
  }

  public async readOne(_id: string): Promise<IUser> {
    const user = await this._userModel.readOne(_id);
    if(!user) throw new Error(ErrorTypes.EntityNotFound);
    return user;
  }

  public async update(_id: string, obj: IUser):Promise<IUser | null> {
    const parsed = UserZodSchema.safeParse(obj);
    if(!parsed.success) throw parsed.error;

    await this.readOne(_id);

    const updatedUser = await this._userModel.update(_id, obj);

    return updatedUser;
  }

  public async delete(_id: string): Promise<void> {
    await this.readOne(_id);
    await this._userModel.delete(_id);
  }
}

export default UserService;