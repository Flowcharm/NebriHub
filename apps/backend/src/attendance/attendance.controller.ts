import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './entities/attendance.entity';

@Injectable()
export class AttendanceController {
  constructor(
    @InjectRepository(Attendance)
    private attendanceRepository: Repository<Attendance>,
  ) {}

  async findAll(): Promise<Attendance[]> {
    return await this.attendanceRepository.find();
  }

  async findOne(id: string): Promise<Attendance> {
    return this.attendanceRepository.findOne({
      where: { id: parseInt(id, 10) },
    });
  }

  async remove(id: string): Promise<void> {
    await this.attendanceRepository.delete(id);
  }
}
