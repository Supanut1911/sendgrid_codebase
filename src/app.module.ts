import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendmailModule } from './sendmail/sendmail.module';

@Module({
  imports: [ConfigModule.forRoot(), SendmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
