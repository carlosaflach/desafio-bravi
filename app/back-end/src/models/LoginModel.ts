import { ILogin } from "../interfaces/ILogin";
import { IModel } from "../interfaces/IModel";
import { IUser } from "../interfaces/IUser";
import UserModel from "./UserModel";

class LoginModel implements ILogin {
  private _userModel: IModel<IUser>

  constructor(model: IModel<IUser>) {
    this._userModel = model;
  }

  public async login(email: string): Promise<IUser> {
    const user = await this._userModel.findOne(email)
    return user as IUser;
  }
}

export default LoginModel;