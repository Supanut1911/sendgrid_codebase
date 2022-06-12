import { SendGridService } from '@anchan828/nest-sendgrid';
import {
  BadRequestException,
  HttpCode,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class SendmailService {
  constructor(private readonly sendgridService: SendGridService) {}

  async sendMail(
    targetmail: string,
    tokenName: string,
    tokenPrice: Number,
  ): Promise<String> {
    try {
      await this.sendgridService.send({
        to: targetmail,
        from: process.env.FROM_EMAIL,
        subject: 'Sendgrid workshop',
        text: 'this text place',
        html: `
          <h1> Hi ${targetmail} </h1>
          <p>Now ${tokenName} = ${tokenPrice}$</p>
        `,
      });
      return `sendmail success`;
    } catch (error) {
      throw new HttpException('sendmailfail', 400);
    }
  }
}
