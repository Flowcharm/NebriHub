import { Controller, Delete, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from '../entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    console.log('Started Controller call');
    return await this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.studentService.remove(id);
  }
}
