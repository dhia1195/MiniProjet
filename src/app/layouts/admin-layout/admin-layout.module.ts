import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AddUniversiteComponent } from "src/app/pages/add-universite/add-universite.component";
import { ListUniversiteComponent } from "src/app/pages/list-universite/list-universite.component";
import { UpdateUniversiteComponent } from "src/app/pages/update-universite/update-universite.component";
import { EtudiantComponent } from 'src/app/pages/etudiant/etudiant.component';
import { EtudiantFormComponent } from 'src/app/pages/etudiant-form/etudiant-form.component';
import { UpdateEtudiantFormComponent } from 'src/app/pages/update-etudiant-form/update-etudiant-form.component';


import { BlocComponent } from 'src/app/pages/bloc/bloc.component';
import { FormBlocComponent } from 'src/app/pages/form-bloc/form-bloc.component';
import { UpdateFormBlocComponent } from 'src/app/pages/update-form-bloc/update-form-bloc.component';

import { FoyerComponent } from 'src/app/pages/foyer/foyer.component';
import { FoyerFormComponent } from 'src/app/pages/foyer-form/foyer-form.component';
import { UpdateFoyerFormComponent } from 'src/app/pages/update-foyer-form/update-foyer-form.component';
import { FoyerStatisticsComponent } from 'src/app/pages/foyer-statistics/foyer-statistics.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AddUniversiteComponent,
    ListUniversiteComponent,
    BlocComponent,
    FormBlocComponent,
    UpdateFormBlocComponent,
    UpdateUniversiteComponent,
    EtudiantComponent,
    EtudiantFormComponent,
    UpdateEtudiantFormComponent,

   UpdateFoyerFormComponent,
   FoyerFormComponent,
   FoyerComponent,
   FoyerStatisticsComponent,

    
  ]
})

export class AdminLayoutModule {}
