import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { InstitutionClass } from '../../classes/entities/class.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Student } from 'src/students/entities/student.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject_name: string;

  @ManyToMany(
    () => InstitutionClass,
    (institutionClass) => institutionClass.subjects,
  )
  classes: InstitutionClass[]; // Relación Asignatura - Clase

  @ManyToMany(() => Student, (student) => student.subjects)
  students: Student[]; // Relación Asignatura - Alumnos que la cursan

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
  teachers: Teacher[]; // Relación Asignatura - Profesor/es

  @ManyToOne(
    () => InstitutionClass,
    (institutionClass) => institutionClass.currentSubject,
  )
  currentClasses: InstitutionClass[];
}
