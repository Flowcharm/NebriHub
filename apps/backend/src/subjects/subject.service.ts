import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  async findAll(): Promise<Subject[]> {
    console.log('findAll Service: Started');
    return await this.subjectRepository.find();
  }

  async findOne(id: string): Promise<Subject> {
    return this.subjectRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: string): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
