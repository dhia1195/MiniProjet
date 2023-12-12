import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { UserLayoutRoutes } from './user-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListUniversiteFComponent } from "src/app/pages/list-universiteF/list-universiteF.component";

import { EtudiantFrontComponent } from 'src/app/pages/etudiant-front/etudiant-front.component';
import { EtudiantDetailsComponent } from 'src/app/pages/etudiant-details/etudiant-details.component';
import { EquipeComponent } from 'src/app/pages/equipe/equipe.component';
import { BlocFrontComponent } from 'src/app/pages/bloc-front/bloc-front.component';
import { BlocDetailsComponent } from 'src/app/pages/bloc-details/bloc-details.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    ListUniversiteFComponent,

EtudiantFrontComponent,
EtudiantDetailsComponent,
EquipeComponent,
BlocFrontComponent,
BlocDetailsComponent

 ]
})

export class UserLayoutModule {}
