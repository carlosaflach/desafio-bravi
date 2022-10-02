import { IUser } from "./IUser";

export interface ILogin {
  login(email: string, password: string): Promise<IUser | boolean>
};