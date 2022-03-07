export class Question {
  _id?: string;
  domain: string;
  announcement: string;
  options: { literal: string; answer: string }[];
  answer: string;
  feedbackURL?: string;
  imageURL?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive: boolean;
}
