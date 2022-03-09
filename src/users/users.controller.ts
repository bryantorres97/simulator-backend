import {
  BadGatewayException,
  Body,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import { GetUserByUidDTO } from './dtos';
import { UsersService } from './users.service';
import { getError } from '../common/helpers/errors.helper';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('uid')
  async getUserByUid(@Res() res: Response, @Body() userData: GetUserByUidDTO) {
    try {
      const user = await this.userService.getUserByUid(userData);
      if (!user)
        throw new BadGatewayException('No se ha podido obtener el usuario');
      return res.json(user);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }
}
