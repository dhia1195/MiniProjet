import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-update-foyer-form',
  templateUrl: './update-foyer-form.component.html',
  styleUrls: ['./update-foyer-form.component.css']
})
export class UpdateFoyerFormComponent implements OnInit {
  foyer: Foyer = new Foyer();
  successMessage: string = '';

  constructor(
    private foyerService: FoyerService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    // Retrieve the foyer ID from the route parameters
    this.route.params.subscribe(params => {
      const idFoyer = +params['id']; // '+' converts the string to a number
      this.loadFoyer(idFoyer);
    });
  }

  loadFoyer(idFoyer: number): void {
    // Use your service method to get the foyer by ID
    this.foyerService.getfoyerById(idFoyer).subscribe(
      (foyer: Foyer) => {
        // Assign the retrieved foyer to the component property
        this.foyer = foyer;
      },
      error => {
        console.error('Error loading foyer:', error);
      }
    );
  }

  updateFoyer(foyerUpdateForm: NgForm): void {
    if (foyerUpdateForm.valid) {
      // Use your service method to update the foyer
      this.foyerService.updatefoyer(this.foyer).subscribe(
        () => {
          // Set the component property to the success message
          this.successMessage = 'Le foyer a été modifié avec succès';
          // Navigate to the "foyer" page
          this.router.navigateByUrl('/foyer');
          // Reset the form or perform any additional actions after successful update
          foyerUpdateForm.resetForm();
        },
        error => {
          console.error('Error updating foyer:', error);
        }
      );
    }
  }
}
