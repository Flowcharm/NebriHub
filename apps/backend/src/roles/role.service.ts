import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async findById(id: string): Promise<Role | undefined> {
    return this.roleRepository.findOne({ where: { id } });
  }

  async findByName(name: string): Promise<Role | undefined> {
    return this.roleRepository.findOne({ where: { name } });
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async create(roleData: Partial<Role>): Promise<Role> {
    const role = this.roleRepository.create(roleData);
    return this.roleRepository.save(role);
  }

  async remove(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
