// etudiant.component.ts
import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {
  etudiants: Etudiant[];
  newEtudiant: Etudiant = new Etudiant(); 
  showAddForm: boolean = false;
  filterId: number; 
  isFiltered: boolean = false; 

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  ngOnInit() {
    this.loadAllEtudiants();
  }

  loadAllEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe((etudiants) => {
      this.etudiants = etudiants;
    });
  }

  removeEtudiant(idEtudiant: number) {
    this.etudiantService.removeEtudiant(idEtudiant).subscribe(() => {
      this.etudiants = this.etudiants.filter(etudiant => etudiant.idEtudiant !== idEtudiant);
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  navigateToEtudiantForm() {
    this.router.navigate(['etudiant/etudiant-form']);
  }

  navigateToUpdateForm(etudiantId: number) {
    this.router.navigate(['etudiant/etudiantUpdate', etudiantId]);
  }

  filterEtudiants() {
    if (this.filterId) {
      this.etudiantService.getEtudiantById(this.filterId).subscribe((etudiant) => {
        if (etudiant) {
          this.etudiants = [etudiant];
          this.isFiltered = true; 
        } else {
          console.log('No student found with ID:', this.filterId);
        }
      });
    } else {
      this.loadAllEtudiants();
      this.isFiltered = false; // Set to false when the filter is cleared
    }
  }

  clearFilter() {
    this.filterId = null;
    this.loadAllEtudiants();
    this.isFiltered = false;
  }
}