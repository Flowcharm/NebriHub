import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Subject } from '../subjects/subject.entity';
import { InstitutionClass } from '../classes/class.entity';
import { User } from '../users/user.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  user: User; // Relación uno a uno con la entidad Usuario

  @ManyToOne(
    () => InstitutionClass,
    (institutionClass) => institutionClass.students,
  )
  currentClass: InstitutionClass;

  @ManyToMany(() => Subject)
  @JoinTable()
  subjects: Subject[];
}
