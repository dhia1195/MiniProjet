import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre-update',
  templateUrl: './chambre-update.component.html',
  styleUrls: ['./chambre-update.component.css']
})
export class ChambreUpdateComponent {

  constructor(
    private chambreService: ChambreService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
    
    
  ) {}

  chambreForm: FormGroup;
  idChambre: number;
  modifierAvecSucces: boolean = false;
  ngOnInit(): void {
    this.chambreForm = this.fb.group({
      numChambre: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      type: new FormControl('', Validators.required)
    });
    this.idChambre = this.activatedRoute.snapshot.params.idChambre;
    console.log(this.idChambre);
    
    this.chambreService.getChambreById(this.idChambre).subscribe((data) => {
      console.log(data);
      this.chambreForm.patchValue({ numChambre: data["numChambre"] });
      this.chambreForm.patchValue({ type: data["type"] });
      console.log("chambre form here ", this.chambreForm.value);
    });
  }

  types = ['SIMPLE', 'DOUBLE', 'TRIPLE'];


  public updateChambre() {
    console.log(this.chambreForm.controls);
  
    if (this.chambreForm.valid) {
  
      this.chambreForm.value["idChambre"] = this.idChambre;
  
      this.chambreService.updateChambre(this.chambreForm.value).subscribe((data) => {

        this.router.navigate(["chambre-list"]);
  
        console.log(data);
        this.modifierAvecSucces = true;
        this.chambreForm.reset();
      });
    }
  }
  

}

