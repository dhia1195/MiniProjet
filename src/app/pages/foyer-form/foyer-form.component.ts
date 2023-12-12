import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer';
import { FoyerService } from 'src/app/services/foyer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foyer-form',
  templateUrl: './foyer-form.component.html',
  styleUrls: ['./foyer-form.component.css']
})
export class FoyerFormComponent implements OnInit {
  foyer: Foyer = new Foyer();
  id: number = 0;

  constructor(
    private foyerService: FoyerService,
    private router: Router,
    private ac: ActivatedRoute,
    http: HttpClient
  ) {}

  ngOnInit(): void {}

  addFoyer(foyerForm: NgForm) {
    if (foyerForm.valid) {
      this.foyerService.addfoyer(foyerForm.value).subscribe({
        next: () => {
          // Ajout réussi, envoyer le SMS
          this.envoyerSMS(foyerForm.value.nom);
          alert('le foyer a été ajouté avec succès !');
          // Naviguer vers la page foyer
          this.router.navigate(['foyer']);
        },
        error: (error) => {
          // Gérer les erreurs lors de l'ajout du foyer
          console.error('Erreur lors de l\'ajout du foyer', error);
        }
      });
    } else {
      // Mettre à jour le foyer existant
      this.foyerService.updatefoyer(foyerForm.value).subscribe({
        next: () => {
          // Mise à jour réussie
          this.router.navigate(['foyer']);
        },
        error: (error) => {
          // Gérer les erreurs lors de la mise à jour du foyer
          console.error('Erreur lors de la mise à jour du foyer', error);
        }
      });
    }
  }

  envoyerSMS(nomFoyer: string): void {
    this.foyerService.sendSMS(nomFoyer).subscribe({
      next: () => {
        console.log('SMS envoyé avec succès');
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi du SMS', error);
      }
    });
  }
  
}
