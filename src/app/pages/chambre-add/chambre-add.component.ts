import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre-add',
  templateUrl: './chambre-add.component.html',
  styleUrls: ['./chambre-add.component.css']
})
export class ChambreAddComponent {

  constructor(private chambreService:ChambreService,private fb:FormBuilder){}

  
  chambreForm:FormGroup;
  ajoutAvecSucces:boolean = false;
  isSubmitted:boolean = false;

  types = ['SIMPLE', 'DOUBLE', 'TRIPLE'];

  ngOnInit(): void {
    this.chambreForm=this.fb.group({
      numChambre:['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      type: ['', Validators.required],
    })
  }

  public addChambre(){
    console.log(this.chambreForm.value);
    if(this.chambreForm.valid){
      this.chambreService.addChambre(this.chambreForm.value).subscribe((data) => {
        console.log(data);
        this.ajoutAvecSucces = true;
        this.chambreForm.reset();
      });
    }

  }

  
}
