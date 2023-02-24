import { ApiProperty } from "@nestjs/swagger";
import { Booking } from "./booking.model";

export class BookingResponseDto implements Booking {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  user: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  parc: string;

  @ApiProperty()
  bookingdate: string;

  @ApiProperty()
  comments?: string;
}

export class AllBookingResponseContract {
  @ApiProperty({isArray: true, type: AllBookingResponseContract })
  data!: Booking[];
}

export class BookingRequestContract {
  @ApiProperty()
  user: string;

  @ApiProperty()
  parc: string;

  @ApiProperty()
  bookingdate: string;

  @ApiProperty()
  comments?: string;
}
