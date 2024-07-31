import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { UsersService } from 'src/users/users.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
  ) {
    this.transporter = nodemailer.createTransport({
      host: configService.get<string>('SMTP_HOST'),
      port: configService.get<number>('SMTP_PORT'),
      secure: configService.get<string>('NODE_ENV') === 'prod',
      auth: {
        user: configService.get<string>('SMTP_USER'),
        pass: configService.get<string>('SMTP_PASS'),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendPasswordResetEmail(email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const resetToken = uuidv4();
    const resetLink = `${this.configService.get<string>(
      'BASE_URL',
    )}/reset-password?token=${resetToken}`;

    await this.userService.savePasswordResetToken(user.id, resetToken);

    await this.transporter.sendMail({
      from: `"NebriCalendar Support Team" <${this.configService.get<string>(
        'SMTP_USER',
      )}>`,
      to: `${email}`,
      subject: 'Password Reset Email',
      text: `We saw you requested a password reset email, so here is your link: ${resetLink}`,
      html: '<b>Hello world?</b>',
    });
  }
}
