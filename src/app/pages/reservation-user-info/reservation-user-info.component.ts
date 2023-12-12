import { Component,Inject,Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-reservation-user-info',
  templateUrl: './reservation-user-info.component.html',
  styleUrls: ['./reservation-user-info.component.scss']
})
export class ReservationUserInfoComponent {
  
  @Input() donnes:any;
  constructor() { }

  ngOnInit(): void {
  }

}
