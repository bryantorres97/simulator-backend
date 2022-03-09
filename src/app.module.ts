import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PlansModule } from './plans/plans.module';
import { ResponsesPerDayModule } from './responses-per-day/responses-per-day.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://AntiFraudesUser:YZs1lF8wTRuWVAyVPv4uNzic0lwKbg5r@35.193.35.251:17027/testSimulator?authSource=admin',
    ),
    ConfigModule.forRoot(),
    QuestionsModule,
    UsersModule,
    PlansModule,
    ResponsesPerDayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
