import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() reservations: Reservation[] = [];
  newReservation: Reservation = new Reservation();
  showAddForm: boolean = false;
  filterId: String;
  isFiltered: boolean = false;
  filterText: string = '';
  sortField: string;
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit() {
    
  }

  /*deleteReservation(idReservation: String) {
    this.reservationService.deleteReservation(idReservation).subscribe((res) => {
      this.reservations = this.reservations.filter(reservation => reservation.idReservation !== idReservation);
      this.reservationRemoved.emit(idReservation); // Emit the removed reservation's ID
    });
  }
*/
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  navigateToReservationForm() {
    this.router.navigate(['/reservation-form']);
  }

  

  
}