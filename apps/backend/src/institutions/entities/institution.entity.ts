// institutions/institution.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Institution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  currently_working: boolean;

  @Column()
  link_to_server: string;
}
