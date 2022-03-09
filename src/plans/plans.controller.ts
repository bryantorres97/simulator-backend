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
import { PlansService } from './plans.service';
import { getError } from '../common/helpers/errors.helper';

@Controller('plans')
export class PlansController {
  constructor(private readonly planService: PlansService) {}

  @Get()
  async getPlans(@Res() res: Response) {
    try {
      const plans = await this.planService.getPlans();
      if (!plans)
        throw new NotFoundException('No se han encontrado los planes');
      res.json(plans);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Get(':id')
  async getPlan(@Res() res: Response, @Param('id') id: string) {
    try {
      const plan = await this.planService.getPlanById(id);
      if (!plan) throw new NotFoundException('No se ha encontrado el plan');
      res.json(plan);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Post()
  async createPlan(@Res() res: Response, @Body() body: any) {
    try {
      const plan = await this.planService.createPlan(body);
      if (!plan) throw new BadRequestException('No se ha podido crear el plan');
      res.json(plan);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Put(':id')
  async updatePlan(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() body: any,
  ) {
    try {
      const plan = await this.planService.updatePlan(id, body);
      if (!plan) throw new NotFoundException('No se ha encontrado el plan');
      res.json(plan);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Delete(':id')
  async deletePlan(@Res() res: Response, @Param('id') id: string) {
    try {
      const plan = await this.planService.deletePlan(id);
      if (!plan) throw new NotFoundException('No se ha encontrado el plan');
      res.json({ message: 'Se ha eliminado el plan' });
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }
}
