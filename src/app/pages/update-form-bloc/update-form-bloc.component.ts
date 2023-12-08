import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-update-form-bloc',
  templateUrl: './update-form-bloc.component.html',
  styleUrls: ['./update-form-bloc.component.css']
})
export class UpdateFormBlocComponent implements OnInit{
  bloc: Bloc = new Bloc();

  constructor(
    private blocService : BlocService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    // Retrieve the etudiant ID from the route parameters
    this.route.params.subscribe(params => {
      const idBloc = +params['idBloc']; // '+' converts the string to a number
      this.loadBloc(idBloc);
    });
  }

  loadBloc(idBloc: number): void {
    // Use your service method to get the bloc by ID
    this.blocService.fetchBlocById(idBloc).subscribe(
      (bloc: Bloc) => {
        console.log('Loaded Bloc:', bloc);
        // Assign the retrieved bloc to the component property
        this.bloc = bloc;
      },
      error => {
        console.error('Error loading bloc', error);
      }
    );
  }

  updateBloc(ubloc: NgForm): void {
    if (ubloc.valid) {
      // Use your service method to update the etudiant
      this.blocService.updateBloc(this.bloc).subscribe(
        () => {
         this.router.navigate(['bloc']),

          // Reset the form or perform any additional actions after successful update
          ubloc.resetForm();
          
        },
        error => {
          console.error('Error updating bloc:', error);
        }
      );
    }
  }

}
