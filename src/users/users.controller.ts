import {
  BadGatewayException,
  Body,
  Controller,
  NotFoundException,
  Post,
  Res,
} from '@nestjs/common';
import { GetUserByUidDTO } from './dtos';
import { UsersService } from './users.service';
import { getError } from '../common/helpers/errors.helper';
import { Response } from 'express';
import { Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers(@Res() res: Response) {
    try {
      const users = await this.userService.getUsers();
      if (!users)
        throw new NotFoundException('No se han encontrado los usuarios');
      return res.json(users);
    } catch (error) {
      const errorData = getError(error);
      return res.status(errorData.statusCode).json(errorData);
    }
  }

  @Post('uid')
  async getUserByUid(@Res() res: Response, @Body() userData: GetUserByUidDTO) {
    try {
      const user = await this.userService.getUserByUid(userData);
      if (!user)
        throw new BadGatewayException('No se ha podido obtener el usuario');
      return res.json(user);
    } catch (error) {
      console.log('error');
      const errorData = getError(error);
      return res
        .status(errorData.statusCode)
        .json({ errorData: error, ...errorData });
    }
  }
}
