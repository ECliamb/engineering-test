import { UserController } from './entities/user/user.controller';
import { ParcController } from './entities/parc/parc.controller';
import { BookingController } from './entities/booking/booking.controller';
import { UserService } from './entities/user/user.service';
import { ParcService } from './entities/parc/parc.service';
import { BookingService } from './entities/booking/booking.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigOptions } from './config';
import { UserModel } from './entities/user/user.model';
import { BookingModel } from './entities/booking/booking.model';
import { ParcModel } from './entities/parc/parc.model';

console.log('ConfigOptions', ConfigOptions)

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigOptions),
    TypeOrmModule.forFeature([UserModel, ParcModel, BookingModel])
  ],
  controllers: [UserController, ParcController, BookingController],
  providers: [UserService, ParcService, BookingService],
})
export class AppModule {}
