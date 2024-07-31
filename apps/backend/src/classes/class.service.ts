import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstitutionClass } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(InstitutionClass)
    private institutionRepository: Repository<InstitutionClass>,
  ) {}

  async findAll(): Promise<InstitutionClass[]> {
    console.log('findAll Service: Inizio'); // Debug log
    return await this.institutionRepository.find();
  }

  async findOne(id: string): Promise<InstitutionClass> {
    return this.institutionRepository.findOne({
      where: { id: parseInt(id, 10) },
    });
  }

  async remove(id: string): Promise<void> {
    await this.institutionRepository.delete(id);
  }
}
