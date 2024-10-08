import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { Institution } from './institution.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institution])],
  providers: [InstitutionService],
  controllers: [InstitutionController],
})
export class InstitutionModule {}
