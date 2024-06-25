// teachers/teacher.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  classes: string;

  @Column()
  currently_working: boolean;

  @Column()
  max_hours_per_week: string;
}
