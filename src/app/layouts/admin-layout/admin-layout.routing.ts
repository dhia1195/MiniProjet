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
];
