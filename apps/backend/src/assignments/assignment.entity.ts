import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { InstitutionClass } from '../classes/class.entity';
import { Subject } from '../subjects/subject.entity';
import { FileEntity } from '../files/file.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => InstitutionClass)
  @JoinTable()
  institutionClass: InstitutionClass[]; // Relación Tarea(s)/Proyecto(s) - Clase(s)

  @ManyToMany(() => Subject)
  @JoinTable()
  subject: Subject[]; // Relación Tarea(s)/Proyecto(s) - Asignatura(s)

  @Column()
  deadline: Date;

  @Column()
  submitted_at: Date;

  @OneToMany(() => FileEntity, (file) => file.assignment)
  files: FileEntity[]; // Relación uno a muchos con archivos
}
