import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { Subject } from '../subjects/subject.entity';
import { Student } from '../students/student.entity';

@Entity()
export class InstitutionClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  school_year: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.classes)
  tutor: Teacher; // Relación Clase - Tutor

  @ManyToMany(() => Subject, (subject) => subject.classes)
  @JoinTable()
  subjects: Subject[]; // Relación Clase - Asignaturas

  @ManyToOne(() => Subject, (subject) => subject.currentClasses)
  currentSubject: Subject; // Relación Asignatura en curso - Clase

  @OneToMany(() => Student, (student) => student.currentClass)
  students: Student[]; // Relación Clase - Estudiantes

  @Column()
  acronym: string;

  @Column()
  archived: boolean;
}
