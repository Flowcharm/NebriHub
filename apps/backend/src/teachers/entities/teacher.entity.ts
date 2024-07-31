import { InstitutionClass } from 'src/classes/entities/class.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

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
  classes: InstitutionClass[]; // Relación Profesor (Tutor) - Clase/s

  @ManyToMany(() => Subject)
  @JoinTable()
  subjects: Subject[]; // Relación Profesor - Asignaturas
}
