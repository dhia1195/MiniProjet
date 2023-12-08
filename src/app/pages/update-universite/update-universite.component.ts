import { Component } from "@angular/core";
import { UniversiteService } from '../../services/universite.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LogService } from '../../services/log.service'; // Assurez-vous que vous avez importé le service de journalisation

@Component({
  selector: "app-update-universite",
  templateUrl: "./update-universite.component.html",
  styleUrls: ["./update-universite.component.scss"],
})
export class UpdateUniversiteComponent {
  constructor(
    private universityService: UniversiteService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private logService: LogService // Ajoutez l'injection du service de journalisation
    
  ) {}

  universiteForm: FormGroup;
  idUniv: number;
  modifierAvecSucces: boolean = false;
  logs: string[] = [];
  ngOnInit(): void {
    this.universiteForm = this.fb.group({
      nomUniv: ["", [Validators.minLength(3), Validators.required]],
      adresse: ["", [Validators.minLength(3), Validators.required]],
    });

    this.idUniv = this.activatedRoute.snapshot.params.idUniv;

    this.universityService.getUniversiteById(this.idUniv).subscribe((data) => {
      console.log(data);
      this.universiteForm.patchValue({ nomUniv: data["nomUniv"] });
      this.universiteForm.patchValue({ adresse: data["adresse"] });
      console.log("uni form here ", this.universiteForm.value);
    });
  }  
  // Composant TypeScript
hideLog(index: number): void {
  console.log('Cachage du log à l\'index :', index);
  this.logs.splice(index, 1); // Supprimez le log à l'index spécifié
}


  public updateUniversity() {
    console.log(this.universiteForm.controls);
  
    if (this.universiteForm.valid) {
      const userId = 'ID_DE_L_UTILISATEUR'; // Remplacez par l'ID réel de l'utilisateur
  
      // Mettez à jour l'université en utilisant le service
      this.universiteForm.value["idUniv"] = this.idUniv;
      const updatedUniversityId = this.idUniv.toString(); // Convertir en chaîne
  
      this.universityService.updateUniversity(this.universiteForm.value).subscribe((data) => {
        // Mettez à jour l'historique des mises à jour
        this.logService.logUpdate(userId, updatedUniversityId);
  
        // Naviguez vers la liste des universités après la mise à jour
        this.router.navigate(["/listUniversite"]);
  
        console.log(data);
        this.modifierAvecSucces = true;
        this.universiteForm.reset();
      });
    }
  }
  
}
