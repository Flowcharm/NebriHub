import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
  ) {}

  async findAll(): Promise<FileEntity[]> {
    console.log('findAll Service: Inizio'); // Debug log
    return await this.fileRepository.find();
  }

  async findOne(id: string): Promise<FileEntity> {
    return this.fileRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: string): Promise<void> {
    await this.fileRepository.delete(id);
  }
}
