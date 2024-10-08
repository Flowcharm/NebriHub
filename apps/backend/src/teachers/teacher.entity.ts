import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Subject } from '../subjects/subject.entity';
import { InstitutionClass } from '../classes/class.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
