
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { Universite } from 'src/app/models/universite';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-update-etudiant-form',
  templateUrl: './update-etudiant-form.component.html',
  styleUrls: ['./update-etudiant-form.component.css']
})
export class UpdateEtudiantFormComponent implements OnInit {
  etudiant: Etudiant = new Etudiant();
  selectedUniversite: string = '';
  universites: Universite[] = [];

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router ,
    private universiteService: UniversiteService,

  ) {}

  ngOnInit(): void {
    // Retrieve the etudiant ID from the route parameters
    this.route.params.subscribe(params => {
      const idEtudiant = +params['id']; // '+' converts the string to a number
      this.loadEtudiant(idEtudiant);
    });

    this.universiteService.getAllUniversities().subscribe(
      (universites: Universite[]) => {
        console.log(universites);
        this.universites = universites;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  loadEtudiant(idEtudiant: number): void {
    // Use your service method to get the etudiant by ID
    this.etudiantService.getEtudiantById(idEtudiant).subscribe(
      (etudiant: Etudiant) => {
        // Assign the retrieved etudiant to the component property
        this.etudiant = etudiant;
      },
      error => {
        console.error('Error loading etudiant:', error);
      }
    );
  }

  updateEtudiant(etudiantUpdateForm: NgForm): void {
    if (etudiantUpdateForm.valid) {
      this.etudiant.ecole = this.selectedUniversite; // Assigner le nom de l'université sélectionnée à l'attribut ecole

      // Use your service method to update the etudiant
      this.etudiantService.updateEtudiant(this.etudiant).subscribe(
        () => {
         this.router.navigate(['etudiant']),

          // Reset the form or perform any additional actions after successful update
          etudiantUpdateForm.resetForm();
          
        },
        error => {
          console.error('Error updating etudiant:', error);
        }
      );
    }
  }
}
