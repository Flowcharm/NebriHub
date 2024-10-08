import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { AuthModule } from '../auth/auth.module';
import { forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Student } from '../students/student.entity';
import { Teacher } from '../teachers/teacher.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Student, Teacher]),
    forwardRef(() => AuthModule),
  ],
  providers: [UserService, JwtService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
