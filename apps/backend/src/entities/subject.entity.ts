import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject_name: string;

  @ManyToMany(() => Student, (student) => student.subjects)
  students: Student[];

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
  teachers: Teacher[];
}
