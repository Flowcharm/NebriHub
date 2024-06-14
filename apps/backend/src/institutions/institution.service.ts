import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Institution } from './entities/institution.entity';

@Injectable()
export class InstitutionsService {
  constructor(
    @InjectRepository(Institution)
    private institutionRepository: Repository<Institution>,
  ) {}

  async findAll(): Promise<Institution[]> {
    console.log('findAll Service: Inizio'); // Debug log
    return await this.institutionRepository.find();
  }

  async findOne(id: string): Promise<Institution> {
    return this.institutionRepository.findOne({
      where: { id: parseInt(id, 10) },
    });
  }

  async remove(id: string): Promise<void> {
    await this.institutionRepository.delete(id);
  }
}
