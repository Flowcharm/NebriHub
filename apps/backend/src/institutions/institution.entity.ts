// institutions/institution.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Institution' })
export class Institution {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  acronym: string;

  @Column({ type: 'boolean' })
  currently_working: boolean;

  @Column({ type: 'varchar' })
  link_to_server: string;
}
