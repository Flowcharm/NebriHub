import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';
import { UserService } from '../users/users.service';
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto, res: Response) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    return { message: 'Login successful' };
  }

  async register(registerDto: RegisterDto, res: Response) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const user = await this.userService.create({
      email: registerDto.email,
      password: hashedPassword,
      first_name: registerDto.firstName,
      last_name: registerDto.lastName,
    });
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    return { message: 'Registration successful' };
  }

  async sendPasswordResetEmail(email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const resetToken = uuidv4();
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

    await this.userService.savePasswordResetToken(user.id, resetToken);

    const transporter = nodemailer.createTransport({
      host: 'smtp.protonmail.com',
      port: 1025,
      secure: false,
      auth: {
        user: 'nebricalendar@protonmail.com',
        pass: 'contraseñanebricalendar2024',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: '"NebriCalendar Support Team" <nebricalendar@protonmail.com>',
      to: `${email}`,
      subject: 'Password Reset Email',
      text: `We saw you requested a password reset email, so here is your link: ${resetLink}`,
      html: '<b>Hello world?</b>',
    });
  }

  async resetPassword(token: string, newPassword: string) {
    const userId = await this.userService.findUserIdByResetToken(token);
    if (!userId) {
      throw new Error('Invalid or expired token');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.userService.updatePassword(userId, hashedPassword);
    await this.userService.clearPasswordResetToken(userId);
  }
}
