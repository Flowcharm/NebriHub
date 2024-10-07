import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Subject } from './subject.entity';
import { InstitutionClass } from './class.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @OneToMany(
    () => InstitutionClass,
    (institutionClass) => institutionClass.tutor,
  )
  classes: InstitutionClass[]; // Relación Profesor (Master o Tutor) - Clase/s

  @ManyToMany(() => Subject)
  @JoinTable()
  subjects: Subject[]; // Relación Profesor - Asignaturas
}
