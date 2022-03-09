import { Module } from '@nestjs/common';
import { ResponsesPerDayService } from './responses-per-day.service';
import { ResponsesPerDayController } from './responses-per-day.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponsesPerDaySchema } from './models/responsesPerDay.model';

@Module({
  providers: [ResponsesPerDayService],
  controllers: [ResponsesPerDayController],
  imports: [
    MongooseModule.forFeature([
      { name: 'responsesPerDay', schema: ResponsesPerDaySchema },
    ]),
  ],
})
export class ResponsesPerDayModule {}
