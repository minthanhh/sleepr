import { Inject, Injectable } from '@nestjs/common';
import { ReservationRepository } from './reservations.repository';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Types } from 'mongoose';
import { PAYMENTS_SERVICE, UserDto } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationRepository,
    @Inject(PAYMENTS_SERVICE) private readonly paymentsService: ClientProxy,
  ) {}

  async create(createReservationDto: CreateReservationDto, { email, _id: userId }: UserDto) {
    return this.paymentsService.send('create_charge', { ...createReservationDto.charge, email }).pipe(
      map((res) => {
        return this.reservationsRepository.create({ ...createReservationDto, invoiceId: res.id, timestamp: new Date(), userId });
      }),
    );
  }

  async findAll() {
    return await this.reservationsRepository.find({});
  }

  async findOne(_id: string) {
    return await this.reservationsRepository.findOne({ _id: new Types.ObjectId(_id) });
  }

  async update(_id: string, updateReservationDto: UpdateReservationDto) {
    return await this.reservationsRepository.findOneAndUpdate({ _id: new Types.ObjectId(_id) }, { $set: updateReservationDto });
  }

  async remove(_id: string) {
    return await this.reservationsRepository.findOneAndDelete({ _id: new Types.ObjectId(_id) });
  }
}
