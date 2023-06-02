import IUser from './user.interface';

import mongoose, { Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  fullName: {
    type: String,
    trim: true,
  },
  occupation: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const Ticket = mongoose.model<IUser>('User', userSchema);

export default Ticket;
