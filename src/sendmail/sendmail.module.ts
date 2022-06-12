import { SendGridModule } from '@anchan828/nest-sendgrid';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendmailController } from './sendmail.controller';
import { SendmailService } from './sendmail.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SendGridModule.forRoot({
      apikey: process.env.SEND_GRID_KEY,
    }),
  ],
  controllers: [SendmailController],
  providers: [SendmailService],
})
export class SendmailModule {}
