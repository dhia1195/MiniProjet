import { Component } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss']
})

export class ListUniversiteComponent {

  universities : any;

  constructor(private universiteService:UniversiteService, private router:Router){}

  ngOnInit(): void {
    this.universiteService.getAllUniversities().subscribe((data) => {
      this.universities=data;
    })
  }

  deleteUniversite(universite : any){
    this.universiteService.deleteUniversity(universite).subscribe((data) => {
      this.universities=data;
    })
  }

}

