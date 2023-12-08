import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-form-bloc',
  templateUrl: './form-bloc.component.html',
  styleUrls: ['./form-bloc.component.css']
})
export class FormBlocComponent implements OnInit {
  bloc : Bloc = new Bloc() ;
  idBloc :number = 0 ;
  constructor(private blocService:BlocService , private router: Router,private ac: ActivatedRoute) {}
  
 
  
  ngOnInit(): void {}



  ajouterbloc(bloc: NgForm) {
    if (bloc.valid) {
      this.blocService.addBloc(bloc.value).subscribe({
        next: () => this.router.navigate(['bloc']),
      });
    } else {
      // Assuming you have an idBloc property in your component to determine whether it's an update
      this.blocService.updateBloc(bloc.value).subscribe({
        next: () => this.router.navigate(['bloc']),
      });
    }
  }

  retournerALaListe(): void {
    this.router.navigate(['/bloc']);
  }
  
}
