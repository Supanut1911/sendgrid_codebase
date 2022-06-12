import { SendGridService } from '@anchan828/nest-sendgrid';
import { HttpException, Injectable } from '@nestjs/common';
import sendmailTemplate from './sendmailtemplate';
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
        html: sendmailTemplate(targetmail, tokenName, tokenPrice),
        // `
        //   <h1> Hi ${targetmail} </h1>
        //   <p>Now ${tokenName} = ${tokenPrice}$</p>
        // `,
      });
      return `sendmail success`;
    } catch (error) {
      throw new HttpException('sendmailfail', 400);
    }
  }
}
