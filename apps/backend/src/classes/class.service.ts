import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstitutionClass } from './class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(InstitutionClass)
    private classRepository: Repository<InstitutionClass>,
  ) {}

  async findAll(): Promise<InstitutionClass[]> {
    console.log('findAll Service: Inizio'); // Debug log
    return await this.classRepository.find();
  }

  async findOne(id: string): Promise<InstitutionClass> {
    return this.classRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: string): Promise<void> {
    await this.classRepository.delete(id);
  }
}
