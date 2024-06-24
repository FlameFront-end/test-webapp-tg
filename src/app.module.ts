import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUpdate } from './telegram/telegram.update';


import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule, ScheduleModule.forRoot()],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('TELEGRAM_BOT_TOKEN'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
    }),
  ],
  controllers: [ AppController],
  providers: [TelegramUpdate],
})
export class AppModule {}
