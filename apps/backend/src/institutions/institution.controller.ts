import { Controller, Delete, Get, Param } from '@nestjs/common';
import { InstitutionsService } from './institution.service';
import { Institution } from './entities/institution.entity';

@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Get()
  async findAll(): Promise<Institution[]> {
    console.log('Started Controller call');
    return await this.institutionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Institution> {
    return this.institutionsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.institutionsService.remove(id);
  }
}
