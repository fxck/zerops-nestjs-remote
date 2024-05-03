import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('entries')
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;
}
