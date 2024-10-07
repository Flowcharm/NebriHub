import { Controller, Delete, Get, Param } from '@nestjs/common';
import { FileService } from './file.service';
import { FileEntity } from '../entities/file.entity';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  async findAll(): Promise<FileEntity[]> {
    console.log('Started Controller call');
    return await this.fileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FileEntity> {
    return this.fileService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.fileService.remove(id);
  }
}
