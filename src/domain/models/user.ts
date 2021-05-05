import { Document } from 'mongoose';

export enum ROLES {
  ADMINISTRATOR = 'administrator',
  JUDGE = 'judge',
}

export default interface User extends Document {
  email: string;
  password: string;
  role: ROLES.ADMINISTRATOR | ROLES.JUDGE;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
