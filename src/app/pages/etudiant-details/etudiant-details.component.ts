// EtudiantDetailsComponent

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {
  @Input() selectedEtudiant: Etudiant;

  constructor(
    private route: ActivatedRoute,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit() {
    // Get the id from the route parameters
    const id: number = +this.route.snapshot.paramMap.get('id');

    // Fetch the details based on the id
    this.etudiantService.getEtudiantById(id).subscribe((etudiant) => {
      this.selectedEtudiant = etudiant;
    });
}
}