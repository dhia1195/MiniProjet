import { Component } from "@angular/core";
import { UniversiteService } from "../../services/universite.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LogService } from "../../services/log.service";
import { PdfService } from "../../services/pdf.service";
import { FoyerService } from "src/app/services/foyer.service";

@Component({
  selector: "app-list-universite",
  templateUrl: "./list-universite.component.html",
  styleUrls: ["./list-universite.component.scss"],
})
export class ListUniversiteComponent {
  universities: any;
  searchTerm: string = "";
  logs: string[] = [];
  logsVisibles: boolean = false;
  foyerList: any;

  get filteredUniversities() {
    if (this.universities)
      return this.universities.filter((uni) => {
        const searchData =
          `${uni.idUniv} ${uni.nomUniv} ${uni.adresse}`.toLowerCase();
        return searchData.includes(this.searchTerm.toLowerCase());
      });
    return [];
  }

  constructor(
    private universiteService: UniversiteService,
    private foyerService: FoyerService,
    private router: Router,
    private logService: LogService,
    private pdfService: PdfService
  ) {}

  ngOnInit(): void {
    this.universiteService.getAllUniversities().subscribe((data) => {
      this.universities = data;
    });
    this.foyerService.findFoyersByUniversiteIsNull().subscribe((data) => {
      this.foyerList = data;
    });
  }
  // Composant TypeScript
  hideLog(index: number): void {
    console.log("Cachage du log à l'index :", index);
    this.logs.splice(index, 1); // Supprimez le log à l'index spécifié
  }
  deleteUniversite(universite: any) {
    const userId = "ID_DE_L_UTILISATEUR";

    console.log("Avant suppression - ID de l'université :", universite.id);

    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cette université ?"
    );

    if (confirmation) {
      const universityIdToDelete = universite.id;

      this.universiteService.deleteUniversity(universite).subscribe((data) => {
        this.logService.logDeletion(userId, universityIdToDelete);

        console.log(
          "Après suppression - ID de l'université supprimée :",
          universityIdToDelete
        );

        this.universities = data;
      });
    }
  }
  afficherLogs() {
    this.logs = this.logService.getLogs();
    this.logsVisibles = true;
  }
  generatePDF() {
    this.pdfService.generatePDF().subscribe(
      (pdfBlob: Blob) => {
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, "_blank");
      },
      (error) => {
        console.error("Erreur lors de la génération du PDF", error);
      }
    );
  }
  affecterFoyerAUniversite(idFoyer: number, nomUniversite: string): void {
    this.universiteService
      .affecterFoyerAUniversite(idFoyer, nomUniversite)
      .subscribe(
        (universite: any) => {
          // Traitement réussi, mettez à jour votre interface utilisateur si nécessaire
          console.log("Affectation réussie :", universite);
        },
        (error) => {
          // Gérez les erreurs ici
          console.error("Erreur lors de l'affectation :", error);
        }
      );
  }

  onOptionSelectionChange(event, uni) {
    const idSelectedFoyer = event.target.value;
    console.log(idSelectedFoyer);
  
    this.foyerList = this.foyerList.filter(foyer => foyer.idFoyer != idSelectedFoyer);
  
    this.universiteService
      .affecterFoyerAUniversite(idSelectedFoyer, uni.nomUniv)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }


  
}
