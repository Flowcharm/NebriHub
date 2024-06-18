import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ClassService } from './class.service';
import { InstitutionClass } from './entities/class.entity';

@Controller('classes')
export class ClassController {
  constructor(private readonly institutionsService: ClassService) {}

  @Get()
  async findAll(): Promise<InstitutionClass[]> {
    console.log('Started Controller call');
    return await this.institutionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<InstitutionClass> {
    return this.institutionsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.institutionsService.remove(id);
  }
}
