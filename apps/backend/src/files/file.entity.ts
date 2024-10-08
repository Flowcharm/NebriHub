import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Assignment } from '../assignments/assignment.entity';

@Entity()
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Nombre original del archivo

  @Column()
  url: string; // URL del archivo en el CDN

  @Column()
  uploadedAt: Date; // Fecha de subida del archivo

  @ManyToOne(() => Assignment, (assignment) => assignment.files)
  assignment: Assignment; // Relación muchos archivos - una asignación
}
