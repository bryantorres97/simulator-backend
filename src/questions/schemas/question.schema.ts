import { Schema } from 'mongoose';

export const QuestionSchema = new Schema({
  domain: { type: String, required: true },
  announcement: { type: String, required: [true, 'Announcement is required'] },
  options: [
    {
      type: {
        _id: false,
        literal: { type: String, required: true },
        answer: { type: String, required: true },
      },
    },
  ],
  answer: { type: String, required: [true, 'Answer is required'] },
  feedbackURL: { type: String },
  imageURL: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  isActive: { type: Boolean, default: true },
});
