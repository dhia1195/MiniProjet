import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {
  @Input() e: Etudiant[] = [];
  newEtudiant: Etudiant = new Etudiant(); 
  showAddForm: boolean = false;
  filterId: number; 
  isFiltered: boolean = false; 
  @Output() etudiantRemoved: EventEmitter<number> = new EventEmitter<number>();


  constructor(private etudiantService: EtudiantService, private router: Router) {}

  ngOnInit() {
    this.loadAllEtudiants();
  }
  removeEtudiant(idEtudiant: number) {
    this.etudiantService.removeEtudiant(idEtudiant).subscribe(() => {
      this.e = this.e.filter(etudiant => etudiant.idEtudiant !== idEtudiant);
      this.etudiantRemoved.emit(idEtudiant); // Emit the removed student's ID
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  navigateToEtudiantForm() {
    this.router.navigate(['/etudiant-form']);
  }

  navigateToUpdateForm(etudiantId: number) {
    this.router.navigate(['/etudiantUpdate', etudiantId]);
  }

  filterEtudiants() {
    if (this.filterId) {
      this.etudiantService.getEtudiantById(this.filterId).subscribe((etudiant) => {
        if (etudiant) {
          this.e = [etudiant];
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

  private loadAllEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe((etudiants) => {
      console.log(etudiants);  // Check the console for the loaded data
      this.e = etudiants;
    });
  }
}
