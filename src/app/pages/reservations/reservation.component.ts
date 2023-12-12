import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationUserInfoComponent } from '../reservation-user-info/reservation-user-info.component';
import { ReservationChambreInfoComponent } from '../reservation-chambre-info/reservation-chambre-info.component';
import { ReservationService } from 'src/app/services/reservation.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Chambre } from 'src/app/models/chambre';

//import { ReservationSuccessDialogComponent } from 'src/app/pages/reservation-success-dialog/reservation-success-dialog.component';


import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationsComponent implements OnInit {
  @Input() reservations: Reservation[] = [];
  newReservation: Reservation = new Reservation();
  filterId: String;
  isFiltered: boolean = false;
  filterText: string = '';
  sortField: string;
  sortDirection: 'asc' | 'desc' = 'asc';
  typeChambre: string = '';
  oldResults: Reservation[] = [];
  searchTerm: string = '';
  constructor(public dialog: MatDialog, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(data => {
      this.reservationsList = data;
      this.oldResults = [...data]; // Stocker une copie non filtrée des réservations

      this.showDetails = Array(this.reservationsList.length).fill(false);
      console.log(this.reservationsList[0])
    })
  }

  reservationsList: any[];
  components = [ReservationUserInfoComponent, ReservationChambreInfoComponent]
  showDetails: boolean[];

  openDialog(index: number, info: Chambre | Etudiant) {
    const dialogRef = this.dialog.open(this.components[index], {
      data: {
        informations: info,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  setTypeChambre(typeChambre: string) {
    this.typeChambre = typeChambre;
  }

  filterReservations() {

    if (this.filterText) {
      const lowerCaseFilterText = this.filterText.toLowerCase().trim();
      console.log(lowerCaseFilterText.includes("sayari"));
      this.reservationsList = this.reservationsList.filter(reservation =>
        reservation.etudiant.prenomEt.toLowerCase().includes(lowerCaseFilterText) 
      );
      console.log(this.reservationsList);
      this.isFiltered = true;
    } else {
      this.loadAllReservations();
      this.isFiltered = false;
    }

  }
  searchFoyers(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.loadAllReservations();
      return;
    }

    this.reservations = this.reservations.filter(
      (reservation) =>
        reservation.etudiant.nomEt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservation.etudiant.prenomEt.toString().includes(searchTerm)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.loadAllReservations();
  }
  clearFilter() {
    this.filterId = null;
    this.reservationsList = this.oldResults;
    this.isFiltered = false;
  }
  sortEtudiants() {
    if (this.sortField) {
      this.reservations = this.reservations.filter(Reservation => Reservation[this.sortField] !== null);

      this.reservations.sort((a, b) => {
        const fieldA = a[this.sortField].toLowerCase();
        const fieldB = b[this.sortField].toLowerCase();

        if (fieldA < fieldB) {
          return this.sortDirection === 'asc' ? -1 : 1;
        }
        if (fieldA > fieldB) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
  }

  public filterByStatus() {
    console.log(this.sortField);
    this.clearFilter();
    this.reservationsList = this.reservationsList.filter(reservation =>
      reservation.statu.toLowerCase().includes(this.sortField) || reservation.statu.toLowerCase().includes(this.sortField)
    );
    console.log(this.reservationsList);
  }
  private loadAllReservations() {
    this.reservationService.getReservations().subscribe((reservations) => {
      console.log(reservations); // Check the console for the loaded data
      this.reservationsList = reservations;
    });
  }


  changeStatusReservation(reservation: Reservation) {
    this.reservationService.updateReservation(reservation).subscribe({
      next: (data) => {
        if (reservation.statu == "valide")
          alert(`reservation du chambre ${reservation.chambre.numChambre} et de  l'etudiant avec cin: ${reservation.etudiant.cin} a été validé`);
        else
          alert(`reservation du chambre ${reservation.chambre.numChambre} et de  l'etudiant avec cin: ${reservation.etudiant.cin} a été annulé`);
      },
      error: (err) => {
        console.log(err);
      }
    })



  }

}
