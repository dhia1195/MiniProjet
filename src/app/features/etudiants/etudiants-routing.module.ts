// etudiants-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { UpdateEtudiantFormComponent } from './update-etudiant-form/update-etudiant-form.component';

const routes: Routes = [
  { path: '', component: EtudiantComponent },
  { path: 'etudiant-form', component: EtudiantFormComponent },
  { path: 'etudiantUpdate/:id', component: UpdateEtudiantFormComponent }, 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
