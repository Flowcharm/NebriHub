// roles/role.controller.ts
import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Role> {
    return this.roleService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.roleService.remove(id);
  }
}
