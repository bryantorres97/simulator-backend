import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResponsePerDay } from './interfaces/responsePerDay.interface';
import { Model } from 'mongoose';
import { startOfDay } from 'date-fns';

@Injectable()
export class ResponsesPerDayService {
  constructor(
    @InjectModel('responsesPerDay')
    private readonly responseModel: Model<ResponsePerDay>,
  ) {}

  createResponse(user: any) {
    return this.responseModel.create(user);
  }

  getQuestionsCountPerUser(user: string) {
    return this.responseModel
      .find({
        user,
        createdAt: { $gt: startOfDay(new Date()) },
      })
      .count();
  }
}
