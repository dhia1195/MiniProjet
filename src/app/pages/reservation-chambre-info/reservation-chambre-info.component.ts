import { Component,Inject,Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-chambre-info',
  templateUrl: './reservation-chambre-info.component.html',
  styleUrls: ['./reservation-chambre-info.component.scss']
})
export class ReservationChambreInfoComponent {

  @Input() donnes;



}
