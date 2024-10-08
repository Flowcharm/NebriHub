import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';

@Injectable()
export class AttendanceController {
  constructor(
    @InjectRepository(Attendance)
    private attendanceRepository: Repository<Attendance>,
  ) {}

  async findAll(): Promise<Attendance[]> {
    console.log('findAll Service: Inizio'); // Debug log
    return await this.attendanceRepository.find();
  }

  async findOne(id: string): Promise<Attendance> {
    return this.attendanceRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: string): Promise<void> {
    await this.attendanceRepository.delete(id);
  }
}
