import { model, Schema } from 'mongoose';
import User, { ROLES } from '../../../../domain/models/user';

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: [ROLES.ADMINISTRATOR, ROLES.JUDGE],
    default: ROLES.JUDGE,
  },
  enabled: { type: Boolean, default: true },
});

const Users = model<User>('user', schema);
export default Users;
