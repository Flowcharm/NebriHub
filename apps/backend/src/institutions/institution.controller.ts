import { Controller, Delete, Get, Param } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { Institution } from './entities/institution.entity';

@Controller('institutions')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Get()
  async findAll(): Promise<Institution[]> {
    console.log('Started Controller call');
    return await this.institutionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Institution> {
    return this.institutionService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.institutionService.remove(id);
  }
}
