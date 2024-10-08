import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Institution } from './institution.entity';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(Institution)
    private institutionRepository: Repository<Institution>,
  ) {}

  async findAll(): Promise<Institution[]> {
    console.log('findAll Service: Started');
    return await this.institutionRepository.find();
  }

  async findOne(id: string): Promise<Institution> {
    return this.institutionRepository.findOne({
      where: { id: id },
    });
  }

  async create(institutionData: Partial<Institution>): Promise<Institution> {
    const newInstitution = this.institutionRepository.create(institutionData); // Crea una nueva instancia de Institution
    return await this.institutionRepository.save(newInstitution); // Guarda la institución en la base de datos
  }

  async remove(id: string): Promise<void> {
    await this.institutionRepository.delete(id);
  }
}
