import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Subject } from './subject.entity';
import { InstitutionClass } from './class.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @ManyToOne(
    () => InstitutionClass,
    (institutionClass) => institutionClass.students,
  )
  currentClass: InstitutionClass; // Relación Estudiante - Clase actual

  @ManyToMany(() => Subject)
  @JoinTable()
  subjects: Subject[]; // Relación Estudiante - Asignaturas
}
