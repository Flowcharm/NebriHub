import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Subject } from './subject.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id_teacher: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @ManyToMany(() => Subject)
  @JoinTable()
  subjects: Subject[];
}
