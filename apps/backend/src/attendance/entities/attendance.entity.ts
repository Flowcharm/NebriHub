import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Subject } from '../../subjects/entities/subject.entity';
import { InstitutionClass } from '../../classes/entities/class.entity';
import { Student } from 'src/students/entities/student.entity';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.id)
  student: Student;

  @ManyToOne(() => Subject, (subject) => subject.id)
  subject: Subject;

  @ManyToOne(() => InstitutionClass, (institutionClass) => institutionClass.id)
  institutionClass: InstitutionClass;

  @Column()
  day: Date;

  // Falta idear cómo organizar la primera y segunda clase de 3 horas cada una

  @Column()
  status: string; // Presente, Ausente, Tarde, etc...
}
