import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class EtudiantFormComponent implements OnInit {
  etudiant: Etudiant = new Etudiant();
  universites: Universite[] = [];
  selectedUniversite: string = '';
  id: number = 0;
  //@Output() ajoutSuccesEvent = new EventEmitter<boolean>(); // Event emitter for success

  constructor(
    private etudiantService: EtudiantService,
    private universiteService: UniversiteService,
    private router: Router,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
  addEtudiant(etudiantForm: NgForm) {
    if (etudiantForm.valid) {
      this.etudiant.ecole = this.selectedUniversite; // Assigner le nom de l'université sélectionnée à l'attribut ecole

      if (this.etudiant.idEtudiant) {
        this.etudiantService.updateEtudiant(this.etudiant).subscribe(
          () => {
            this.router.navigate(['etudiant']);
          },
          (error: any) => {
            console.error(error);
          }
        );
      } else {
        this.etudiantService.addEtudiants([this.etudiant]).subscribe(
          () => {
          //  this.ajoutSuccesEvent.emit(true); // Emit the success event

            this.router.navigate(['etudiant']);

          },
          (error: any) => {
            console.error(error);
          }
        );
      }
    }
  }
}