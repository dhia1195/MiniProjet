import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class EtudiantFormComponent implements OnInit {
  etudiant: Etudiant = new Etudiant();
  id: number = 0;

  constructor(private etudiantService: EtudiantService, private router: Router,private ac: ActivatedRoute
    ) {}

  ngOnInit(): void {}

  addEtudiant(etudiantForm: NgForm) {
    if (etudiantForm.valid) {
      const etudiantsToAdd: Etudiant[] = [this.etudiant]; // Assuming you want to add a single etudiant
      this.etudiantService.addEtudiants(etudiantsToAdd).subscribe({
        next: () => this.router.navigate(['etudiant']),
      });
    } else {
      this.etudiantService.updateEtudiant(this.etudiant).subscribe({
        next: () => this.router.navigate(['etudiant']),
      });
    }
  }

  
}
