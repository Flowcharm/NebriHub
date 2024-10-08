import { Controller, Delete, Get, Param } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async findAll(): Promise<Subject[]> {
    console.log('Started Controller call');
    return await this.subjectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Subject> {
    return this.subjectService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.subjectService.remove(id);
  }
}
