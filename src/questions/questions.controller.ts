import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { QuestionsService } from './questions.service';
import { getError } from 'src/common/helpers';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  async getQuestions(@Res() res: Response) {
    try {
      const questions = await this.questionService.getQuestions();
      if (!questions)
        throw new NotFoundException('No se han encontrado las preguntas');
      return res.json(questions);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Get(':id')
  async getQuestion(@Res() res: Response, @Param('id') id: string) {
    try {
      const question = await this.questionService.getQuestion(id);
      if (!question)
        throw new NotFoundException('No se ha encontrado la pregunta');
      res.json(question);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Post()
  async createQuestion(@Res() res: Response, @Body() body: any) {
    try {
      console.log(body);
      const question = await this.questionService.createQuestion(body);
      if (!question)
        throw new BadRequestException('No se pudo crear la pregunta');
      return res.json(question);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
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
      if (!question)
        throw new NotFoundException('No se ha actualizado la pregunta');
      return res.json(question);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Delete(':id')
  async deleteQuestion(@Res() res: Response, @Param('id') id: string) {
    try {
      const question = await this.questionService.deleteQuestion(id);
      if (!question)
        throw new NotFoundException('No se ha encontrado la pregunta');
      res.json({ message: 'Se ha borrado la pregunta' });
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Get('domain/:name')
  async getQuestionsByDomain(
    @Res() res: Response,
    @Param('name') domain: string,
  ) {
    try {
      const questions = await this.questionService.getQuestionsByDomain(domain);
      if (!questions)
        throw new NotFoundException(
          'No se han encontrado las preguntas del dominio especificado',
        );
      return res.json(questions);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Get('exam/:quantity')
  async getQuestionsForExam(
    @Res() res: Response,
    @Param('quantity') quantity: string,
  ) {
    try {
      const questions = await this.questionService.getQuestionsForExam(
        Number(quantity),
      );
      if (!questions)
        throw new NotFoundException('No se han encontrado las preguntas');
      res.json(questions);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }
}
