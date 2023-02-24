import { Column, Entity, PrimaryColumn } from 'typeorm';

export interface User {
  id?: string;
  name: string;
  email: string;
}

@Entity({ name: 'users'})
export class UserModel implements User {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;
}
