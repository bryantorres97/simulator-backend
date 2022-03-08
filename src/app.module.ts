import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { ProfilesModule } from './profiles/profiles.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://AntiFraudesUser:YZs1lF8wTRuWVAyVPv4uNzic0lwKbg5r@35.193.35.251:17027/simulador?authSource=admin',
    ),
    ConfigModule.forRoot(),
    QuestionsModule,
    ProfilesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
