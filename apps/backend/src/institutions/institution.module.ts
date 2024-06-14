// institutions/institution.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionsService } from './institution.service';
import { InstitutionsController } from './institution.controller';
import { Institution } from './entities/institution.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institution])],
  providers: [InstitutionsService],
  controllers: [InstitutionsController],
})
export class InstitutionModule {}
