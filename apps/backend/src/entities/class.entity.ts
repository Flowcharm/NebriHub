import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Teacher } from './teacher.entity';
import { Subject } from './subject.entity';

@Entity()
export class InstitutionClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  school_year: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.classes)
  tutor: Teacher; // Relación Clase - Tutor

  @ManyToMany(() => Subject, (subject) => subject.classes)
  @JoinTable()
  subjects: Subject[]; // Relación Clase - Asignaturas

  @Column()
  acronym: string;

  @Column()
  current_year: boolean;
}
