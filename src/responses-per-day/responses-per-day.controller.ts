import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ResponsesPerDayService } from './responses-per-day.service';
import { getError } from '../common/helpers/errors.helper';

@Controller('responses-per-day')
export class ResponsesPerDayController {
  constructor(private readonly responseService: ResponsesPerDayService) {}

  @Get(':id')
  async getCountResponses(@Res() res: Response, @Param('id') id: string) {
    try {
      const count = await this.responseService.getQuestionsCountPerUser(id);
      res.json(count);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Post()
  async createResponse(@Res() res: Response, @Body() body: any) {
    try {
      const response = await this.responseService.createResponse(body);
      if (!response)
        throw new BadRequestException('No se ha podido registrar la respuesta');
      return res.json({ ok: true });
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }
}
