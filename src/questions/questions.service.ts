import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './interfaces/question.interface';
@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel('questions') private readonly questionModel: Model<Question>,
  ) {}

  getQuestions() {
    return this.questionModel.find({ isActive: true });
  }

  getQuestion(id: string) {
    return this.questionModel.findOne({ _id: id, isActive: true });
  }

  createQuestion(question: any) {
    return this.questionModel.create(question);
  }

  updateQuestion(id: string, question: any) {
    return this.questionModel.findOneAndUpdate(
      {
        _id: id,
        isActive: true,
      },
      question,
      { new: true },
    );
  }

  deleteQuestion(id: string) {
    return this.questionModel.findOneAndUpdate(
      { _id: id, isActive: true },
      { isActive: false },
      { new: true },
    );
  }
}
