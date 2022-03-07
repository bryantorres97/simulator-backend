import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from './schemas/question.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'questions', schema: QuestionSchema }]),
  ],
  providers: [QuestionsService],
  controllers: [QuestionsController],
})
export class QuestionsModule {}
