import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstitutionClass } from '../classes/class.entity';
import { Assignment } from './assignment.entity';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(Assignment)
    private assignmentRepository: Repository<Assignment>,
  ) {}

  async findAll(): Promise<Assignment[]> {
    console.log('findAll Service: Inizio'); // Debug log
    return await this.assignmentRepository.find();
  }

  async findOne(id: string): Promise<Assignment> {
    return this.assignmentRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: string): Promise<void> {
    await this.assignmentRepository.delete(id);
  }
}
