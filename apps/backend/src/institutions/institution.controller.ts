import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { Institution } from './institution.entity';

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

  @Post('create')
  async create(@Body() institution: Institution): Promise<Institution> {
    return this.institutionService.create(institution);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.institutionService.remove(id);
  }
}
