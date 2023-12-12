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
import { ReservationComponent } from 'src/app/pages/reservation/reservation.component';
import { ReservationFormComponent } from 'src/app/pages/reservation-form/reservation-form.component';
import { ReservationsComponent } from 'src/app/pages/reservations/reservation.component';
import { ReservationChambreInfoComponent } from 'src/app/pages/reservation-chambre-info/reservation-chambre-info.component';
import { ReservationUserInfoComponent } from 'src/app/pages/reservation-user-info/reservation-user-info.component';
import { ReservationStatusComponent } from 'src/app/pages/reservation-status/reservation-status.component';
import { MatCardModule } from '@angular/material/card';


// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { FoyerFrontComponent } from 'src/app/pages/foyer-front/foyer-front.component';
import { ChambreAddComponent } from 'src/app/pages/chambre-add/chambre-add.component';
import { ChambreListComponent } from 'src/app/pages/chambre-list/chambre-list.component';
import { ChambreUpdateComponent } from 'src/app/pages/chambre-update/chambre-update.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule, 
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
   FoyerFrontComponent,

   ChambreAddComponent,
   ChambreListComponent,
   ChambreUpdateComponent,



  ReservationComponent,
   ReservationsComponent,
   ReservationChambreInfoComponent,
   ReservationUserInfoComponent,
   ReservationStatusComponent,

    
  ]
})

export class AdminLayoutModule {}
