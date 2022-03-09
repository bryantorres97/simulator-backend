import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  uid: { type: String, required: [true, 'El uid del usuario es requerido'] },
  name: { type: String, required: [true, 'El nombre es requerido'] },
  pictureURL: { type: String, default: '' },
  email: { type: String },
  plan: { type: Schema.Types.ObjectId, ref: 'plans' },
  // auth: {
  //   type: String,
  //   required: [true, 'El tipo de autenticación es requerido'],
  // },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
});
