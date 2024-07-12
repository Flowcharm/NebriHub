import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InstitutionClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  current_year: string;

  @Column()
  acronym: string;

  @Column()
  currently_working: boolean;
}
