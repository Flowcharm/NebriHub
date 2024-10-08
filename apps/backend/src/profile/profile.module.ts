import { forwardRef, Module } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Teacher } from '../teachers/teacher.entity';
import { Student } from '../students/student.entity';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Teacher, Student]),
    forwardRef(() => AuthModule),
  ],
  providers: [UserService, JwtService],
  controllers: [ProfileController],
  exports: [UserService],
})
export class ProfileModule {}
