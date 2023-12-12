import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { Chambre } from 'src/app/models/chambre';
import { Etudiant} from 'src/app/models/etudiant';


import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  
  reservation: Reservation = new Reservation();
  numChambre: number;
  cin: number;
  showAddForm: boolean = false;
  filterId: number; 
  isFiltered: boolean = false; 
  filterText: string = '';
  chambres:Chambre[];
  etudiants:Etudiant[];
  loggedInUser;


  sortField: string;
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loggedInUser=JSON.parse(localStorage.getItem("user") || "{}");
    this.reservationService.getChambres().subscribe({
      next : (data) => {
        this.chambres=data;
      },
      error : (error) => {

      }
    });
    this.reservationService.getEtudiant().subscribe({
      next : (data) => {
        this.etudiants=data;
      },
      error : (error) => {

      }
    });
    
   }

   ajouterReservation(){
    this.reservationService.ajouterReservation(this.numChambre, this.cin).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/reservation']); // Revenir à la page '/reservation'
      }, 
      error: (error) => {                                                                                     
        console.error('Error occurred:', error);
      }
    });
    alert("Réservation affectée avec succès. S'il vous plaît, veuillez effectuer le paiement avant la date limite.");
  }




 
  
}