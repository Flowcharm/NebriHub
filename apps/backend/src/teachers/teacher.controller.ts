import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from './entities/teacher.entity';
import { RegisterDto } from '../auth/dto/register.dto';
import { Response } from 'express';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async findAll(): Promise<Teacher[]> {
    console.log('Started Controller call');
    return await this.teacherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Teacher> {
    return this.teacherService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.teacherService.remove(id);
  }
}
