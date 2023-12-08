import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { FormsModule } from '@angular/forms';
import { UpdateEtudiantFormComponent } from './update-etudiant-form/update-etudiant-form.component';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
    declarations: [EtudiantComponent, EtudiantFormComponent, UpdateEtudiantFormComponent],
    imports: [
        CommonModule,
        EtudiantsRoutingModule,
        FormsModule,
        ComponentsModule
    ]
})
export class EtudiantsModule { }
/* declarations: [EtudiantComponent,EtudiantFormComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,EtudiantModule,EtudiantFormModule*/