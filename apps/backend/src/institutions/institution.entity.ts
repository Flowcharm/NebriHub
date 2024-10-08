import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Institution {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  currently_working: boolean;

  @Column()
  link_to_server: string;
}
