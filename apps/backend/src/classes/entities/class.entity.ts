import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Subject } from '../../subjects/entities/subject.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';

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

  @OneToMany(() => Subject, (subject) => subject.currentClasses)
  currentSubject: Subject;

  @Column()
  acronym: string;

  @Column()
  current_year: boolean;
}
