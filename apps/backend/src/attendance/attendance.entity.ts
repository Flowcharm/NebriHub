import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Student } from '../students/student.entity';
import { Subject } from '../subjects/subject.entity';
import { InstitutionClass } from '../classes/class.entity';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student, (student) => student.id)
  student: Student;

  @ManyToOne(() => Subject, (subject) => subject.id)
  subject: Subject;

  @ManyToOne(() => InstitutionClass, (institutionClass) => institutionClass.id)
  institutionClass: InstitutionClass;

  @Column()
  day: Date;

  @Column()
  status: string; // Presente, Ausente, Tarde, etc...
}
