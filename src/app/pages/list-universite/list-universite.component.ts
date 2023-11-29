import { Component } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss']
})

export class ListUniversiteComponent {

  universities: any;
  searchTerm: string = '';
  logs: string[] = [];
  logsVisibles: boolean = false;

  get filteredUniversities() {
    return this.universities.filter(uni => {
      const searchData = `${uni.idUniv} ${uni.nomUniv} ${uni.adresse}`.toLowerCase();
      return searchData.includes(this.searchTerm.toLowerCase());
    });
  }

  constructor(
    private universiteService: UniversiteService,
    private router: Router,
    private logService: LogService
  ) {}

  ngOnInit(): void {
    this.universiteService.getAllUniversities().subscribe((data) => {
      this.universities = data;
    });
  }
  // Composant TypeScript
hideLog(index: number): void {
  console.log('Cachage du log à l\'index :', index);
  this.logs.splice(index, 1); // Supprimez le log à l'index spécifié
}
  deleteUniversite(universite: any) {
    const userId = 'ID_DE_L_UTILISATEUR';
    
    console.log('Avant suppression - ID de l\'université :', universite.id);

    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cette université ?");

    if (confirmation) {
      // Récupérez l'ID avant la suppression
      const universityIdToDelete = universite.id;

      this.universiteService.deleteUniversity(universite).subscribe((data) => {
        // Mettez à jour l'historique des suppressions en utilisant l'ID récupéré
        this.logService.logDeletion(userId, universityIdToDelete);
        
        console.log('Après suppression - ID de l\'université supprimée :', universityIdToDelete);

        // Mettez à jour votre liste d'universités, etc.
        this.universities = data;
        
      });
    }
}


afficherLogs() {
    // Récupérer les logs du service de journalisation
    this.logs = this.logService.getLogs();
    // Afficher la section des logs
    this.logsVisibles = true;
}

}
