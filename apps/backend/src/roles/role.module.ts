import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role]), forwardRef(() => AuthModule)],
  providers: [RoleService, JwtService],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
