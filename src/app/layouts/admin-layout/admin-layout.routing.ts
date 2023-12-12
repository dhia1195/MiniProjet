import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { AddUniversiteComponent } from "src/app/pages/add-universite/add-universite.component";
import { ListUniversiteComponent } from "src/app/pages/list-universite/list-universite.component";
import { UpdateUniversiteComponent } from "src/app/pages/update-universite/update-universite.component";
import { EtudiantComponent } from 'src/app/pages/etudiant/etudiant.component';
import { EtudiantFormComponent } from 'src/app/pages/etudiant-form/etudiant-form.component';
import { UpdateEtudiantFormComponent } from 'src/app/pages/update-etudiant-form/update-etudiant-form.component';
import { StatistiqueComponent } from 'src/app/pages/statistique/statistique.component';
import { BlocComponent } from 'src/app/pages/bloc/bloc.component';
import { FormBlocComponent } from 'src/app/pages/form-bloc/form-bloc.component';


import { UpdateFormBlocComponent } from 'src/app/pages/update-form-bloc/update-form-bloc.component';
import { FoyerStatisticsComponent } from "src/app/pages/foyer-statistics/foyer-statistics.component";
import { FoyerComponent } from "src/app/pages/foyer/foyer.component";
import { FoyerFormComponent } from "src/app/pages/foyer-form/foyer-form.component";
import { UpdateFoyerFormComponent } from "src/app/pages/update-foyer-form/update-foyer-form.component";
import { ReservationComponent } from "src/app/pages/reservation/reservation.component";
import { ReservationsComponent } from "src/app/pages/reservations/reservation.component";
import { ReservationFormComponent } from "src/app/pages/reservation-form/reservation-form.component";
import { ChambreListComponent } from "src/app/pages/chambre-list/chambre-list.component";
import { ChambreAddComponent } from "src/app/pages/chambre-add/chambre-add.component";
import { ChambreUpdateComponent } from "src/app/pages/chambre-update/chambre-update.component";
export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  {
    path: "addUniversite",
    component: AddUniversiteComponent,
  },
  {
    path: "listUniversite",
    component: ListUniversiteComponent,
  },
  {
    path: "updateUniversite/:idUniv",
    component: UpdateUniversiteComponent,
  },
  { path: 'etudiant',      component: EtudiantComponent },
  { path: 'etudiant-form',      component: EtudiantFormComponent },
  { path: 'update-etudiant-form',      component: UpdateEtudiantFormComponent },
  { path: 'etudiantUpdate/:id', component: UpdateEtudiantFormComponent }, 
  { path: 'statistique', component: StatistiqueComponent },


  
  { path: 'bloc',           component: BlocComponent },
  { path: 'bloc-form', component: FormBlocComponent },
  { path: 'update-form-bloc',component: UpdateFormBlocComponent },
  { path: 'updateBloc/:idBloc', component: UpdateFormBlocComponent },


  { path: 'foyer',           component: FoyerComponent },
  { path: 'foyer-form', component: FoyerFormComponent },
  { path: 'foyer-statistics', component: FoyerStatisticsComponent },
  { path: 'foyerUpdate/:id', component: UpdateFoyerFormComponent },


  { path: 'reservation',      component: ReservationComponent },
  { path: 'reservations',      component: ReservationsComponent },
 // { path: 'reservation-form',      component: ReservationFormComponent },
  { path: 'chambre-list',      component: ChambreListComponent },
  { path: 'chambre-add',      component: ChambreAddComponent },
  { path: 'chambre-update/:id',      component: ChambreUpdateComponent }


];
