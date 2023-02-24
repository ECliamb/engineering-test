import { Column, Entity, PrimaryColumn } from 'typeorm';

export interface Booking {
  id?: string;
  user: string;
  parc: string;
  bookingdate: string;
  comments?: string;
}

@Entity({ name: 'bookings'})
export class BookingModel {
  @PrimaryColumn()
  id!: string;

  @Column()
  user!: string;

  @Column()
  parc!: string;

  @Column()
  bookingdate!: string;

  @Column()
  comments?: string;
}
