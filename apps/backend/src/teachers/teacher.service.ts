import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { User } from '../users/entities/users.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async findAll(): Promise<Teacher[]> {
    console.log('findAll Service: Started');
    return await this.teacherRepository.find();
  }

  async findOne(id: string): Promise<Teacher> {
    return this.teacherRepository.findOne({
      where: { id: parseInt(id, 10) },
    });
  }

  async remove(id: string): Promise<void> {
    await this.teacherRepository.delete(id);
  }

  async create(teacherData: Partial<Teacher>): Promise<Teacher> {
    const teacher = this.teacherRepository.create(teacherData);
    return this.teacherRepository.save(teacher);
  }
}
