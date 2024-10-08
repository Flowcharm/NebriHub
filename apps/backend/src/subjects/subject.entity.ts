import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Student } from '../students/student.entity';
import { Teacher } from '../teachers/teacher.entity';
import { InstitutionClass } from '../classes/class.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subject_name: string;

  @ManyToMany(
    () => InstitutionClass,
    (institutionClass) => institutionClass.subjects,
  )
  classes: InstitutionClass[]; // Relación Asignatura - Clase

  @ManyToMany(() => Student, (student) => student.subjects)
  @JoinTable()
  students: Student[]; // Relación Asignatura - Alumnos que la cursan

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
  @JoinTable()
  teachers: Teacher[]; // Relación Asignatura - Profesor/es

  @ManyToOne(
    () => InstitutionClass,
    (institutionClass) => institutionClass.currentSubject,
  )
  currentClasses: InstitutionClass[];
}
