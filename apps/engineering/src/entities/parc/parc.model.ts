import { Column, Entity, PrimaryColumn } from 'typeorm';

export interface Parc {
  id?: string;
  name: string;
  description: string;
}

@Entity({ name: 'parcs' })
export class ParcModel implements Parc {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;
}
