import { Component } from "@angular/core";
import { UniversiteService } from '../../services/universite.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-update-universite",
  templateUrl: "./update-universite.component.html",
  styleUrls: ["./update-universite.component.scss"],
})
export class UpdateUniversiteComponent {
  constructor(
    private universityService: UniversiteService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  universiteForm: FormGroup;
  idUniv:number;
  ngOnInit(): void {
    this.universiteForm= this.fb.group({
      nomUniv: ["", [Validators.minLength(3), Validators.required]],
      adresse: ["", [Validators.minLength(3), Validators.required]],
    });

    this.idUniv = this.activatedRoute.snapshot.params.idUniv;
    

    this.universityService.getUniversiteById(this.idUniv).subscribe((data) => {
      console.log(data);
      this.universiteForm.patchValue({ nomUniv: data["nomUniv"] });
      this.universiteForm.patchValue({ adresse: data["adresse"] });
      console.log("uni form here ",this.universiteForm.value);
    });
  }

  public updateUniversity() {
    console.log(this.universiteForm.controls);
    if (this.universiteForm.valid) {
      this.universiteForm.value["idUniv"]=this.idUniv;
      this.universityService
        .updateUniversity(this.universiteForm.value)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
