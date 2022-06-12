import { Body, Controller, Post } from '@nestjs/common';
import { SendmailService } from './sendmail.service';

@Controller('sendmail')
export class SendmailController {
  constructor(private readonly sendmailService: SendmailService) {}

  @Post('/bysendgrid')
  async sendMail(
    @Body('targetmail') targetmail: string,
    @Body('tokenName') tokenName: string,
    @Body('tokenPrice') tokenPrice: Number,
  ): Promise<String> {
    return await this.sendmailService.sendMail(
      targetmail,
      tokenName,
      tokenPrice,
    );
  }
}
