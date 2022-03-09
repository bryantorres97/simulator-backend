import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PlanSchema } from '../plans/models/plan.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'plans', schema: PlanSchema }]),
  ],
})
export class UsersModule {}
