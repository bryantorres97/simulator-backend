import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  async getQuestions(@Res() res: Response) {
    try {
      const questions = await this.questionService.getQuestions();
      return res.json(questions);
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  async getQuestion(@Res() res: Response, @Param('id') id: string) {
    try {
      const question = await this.questionService.getQuestion(id);
      res.json(question);
    } catch (error) {
      console.log(error);
    }
  }

  @Post()
  async createQuestion(@Res() res: Response, @Body() body: any) {
    try {
      const question = await this.questionService.createQuestion(body);
      return res.json(question);
    } catch (error) {
      console.log(error);
    }
  }

  @Put(':id')
  async updateQuestion(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() body: any,
  ) {
    try {
      const question = await this.questionService.updateQuestion(id, {
        updatedAt: new Date(),
        ...body,
      });
      return res.json(question);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  async deleteQuestion(@Res() res: Response, @Param('id') id: string) {
    try {
      const question = await this.questionService.deleteQuestion(id);
      res.json({ message: 'Se ha borrado la pregunta' });
    } catch (error) {
      console.log(error);
    }
  }
}
