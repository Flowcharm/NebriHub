import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Available roles: Student, Teacher, Administrator, Platform Admin.

  @Column()
  admin_permissions: boolean;
}
