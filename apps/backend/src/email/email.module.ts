import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { UsersModule } from 'src/users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
  imports: [UsersModule, ConfigModule],
  exports: [EmailService],
})
export class EmailModule {}
