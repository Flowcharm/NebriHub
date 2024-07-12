import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    console.log('findAll Service: Started');
    return await this.studentRepository.find();
  }

  async findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne({
      where: { id: parseInt(id, 10) },
    });
  }

  async remove(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
