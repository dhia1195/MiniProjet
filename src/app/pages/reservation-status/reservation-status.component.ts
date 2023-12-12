
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { stat } from 'fs';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-status',
  templateUrl: './reservation-status.component.html',
  styleUrls: ['./reservation-status.component.css']
})
export class ReservationStatusComponent {

  @Input() reservation: Reservation;
  @Output() changeStatusEvent = new EventEmitter<Reservation>();

  constructor(private reservationService: ReservationService) { }

  changeStatus(status: string) {
    this.reservation.statu = status;

      this.changeStatusEvent.emit(this.reservation);

  }


}




