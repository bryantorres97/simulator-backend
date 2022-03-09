import { Schema } from 'mongoose';

const expiresTime = 3600 * 24 * 2; // Expira en dos días
export const ResponsesPerDaySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, expires: expiresTime, default: Date.now },
});
