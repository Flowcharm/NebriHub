import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { InstitutionClass } from './class.entity';
import { Subject } from './subject.entity';
import { FileEntity } from './file.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

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
