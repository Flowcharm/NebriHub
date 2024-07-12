// classes/class.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { InstitutionClass } from '../entities/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstitutionClass])],
  providers: [ClassService],
  controllers: [ClassController],
})
export class ClassModule {}
