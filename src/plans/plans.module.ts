import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanSchema } from './models/plan.model';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';

@Module({
  controllers: [PlansController],
  providers: [PlansService],
  imports: [MongooseModule.forFeature([{ name: 'plans', schema: PlanSchema }])],
})
export class PlansModule {}
