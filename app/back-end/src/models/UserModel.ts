import { model as mongooseCreateModel, Schema} from 'mongoose';
import { IUser } from '../interfaces/IUser';
import MongoModel from './MongoModel';

const userMongooseSchema = new Schema<IUser>({
  name: String,
  age: Number,
  email: String,
  telefoneNumber: Number,
  celNumber: Number,
  address: String,
  password: String,
});

class UserModel extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel('User', userMongooseSchema)) {
    super(model);
  }
}

export default UserModel;