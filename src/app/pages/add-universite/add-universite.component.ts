import { Component, KeyValueDiffers } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.scss']
})
export class AddUniversiteComponent {

  constructor(private universityService:UniversiteService,private fb:FormBuilder){}
  
  universiteForm:FormGroup;

  ngOnInit(): void {
    this.universiteForm=this.fb.group({
      nomUniv: ['',[Validators.minLength(3),Validators.required]],
      adresse: ['',[Validators.minLength(3),Validators.required]]
    })
  }



  public addUniversity(){
    console.log(this.universiteForm.controls);
    if(this.universiteForm.valid){
      this.universityService.addUniversity(this.universiteForm.value).subscribe((data) => {
        console.log(data);
      });
    }

  }
}
