import { model as mongooseCreateModel, Schema} from 'mongoose';
import { IUser } from '../interfaces/IUser';
import MongoModel from './MongoModel';

const userMongooseSchema = new Schema<IUser>({
  name: String,
  age: Number,
  email: String,
  phoneNumber: Number,
  celNumber: Number,
  address: String,
  password: String,
}, { versionKey: false });

class UserModel extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel('User', userMongooseSchema)) {
    super(model);
  }
}

export default UserModel;