import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EtudiantFormComponent } from 'src/app/pages/etudiant-form/etudiant-form.component';
import { UpdateEtudiantFormComponent } from 'src/app/pages/update-etudiant-form/update-etudiant-form.component';
import { StatistiqueComponent } from 'src/app/pages/statistique/statistique.component';
import { EtudiantFrontComponent } from 'src/app/pages/etudiant-front/etudiant-front.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { ListUniversiteFComponent } from 'src/app/pages/list-universiteF/list-universiteF.component';
import { EtudiantDetailsComponent } from 'src/app/pages/etudiant-details/etudiant-details.component';
import { EquipeComponent } from 'src/app/pages/equipe/equipe.component';
import { BlocFrontComponent } from 'src/app/pages/bloc-front/bloc-front.component';
import { BlocDetailsComponent } from 'src/app/pages/bloc-details/bloc-details.component';
import { FoyerFrontComponent } from 'src/app/pages/foyer-front/foyer-front.component';

export const UserLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'etudiant-form',      component: EtudiantFormComponent },
    { path: 'update-etudiant-form',      component: UpdateEtudiantFormComponent },
    { path: 'etudiantUpdate/:id', component: UpdateEtudiantFormComponent }, 
    { path: 'statistique', component: StatistiqueComponent },
    { path: 'etudiantf', component: EtudiantFrontComponent },
    { path: 'login', component: LoginComponent },

    { path: 'register', component: RegisterComponent },
    
    { path: 'university',      component: ListUniversiteFComponent },

    { path: 'details/:id',      component: EtudiantDetailsComponent },

    { path: 'equipe',         component: EquipeComponent},
    { path: 'blocf',         component: BlocFrontComponent},
    { path: 'detailsb/:id',         component: BlocDetailsComponent},

    { path: 'foyerf',         component: FoyerFrontComponent},

];
