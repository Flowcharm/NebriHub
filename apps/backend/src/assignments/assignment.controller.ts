import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { Assignment } from '../entities/assignment.entity';

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Get()
  async findAll(): Promise<Assignment[]> {
    console.log('findAll Controller: Inizio');
    return await this.assignmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Assignment> {
    return this.assignmentService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.assignmentService.remove(id);
  }
}
