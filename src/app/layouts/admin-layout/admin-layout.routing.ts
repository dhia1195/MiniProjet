import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EtudiantComponent } from 'src/app/pages/etudiant/etudiant.component';
import { EtudiantFormComponent } from 'src/app/pages/etudiant-form/etudiant-form.component';
import { UpdateEtudiantFormComponent } from 'src/app/pages/update-etudiant-form/update-etudiant-form.component';
import { BlocComponent } from 'src/app/pages/bloc/bloc.component';
import { FormBlocComponent } from 'src/app/pages/form-bloc/form-bloc.component';
import { UpdateFormBlocComponent } from 'src/app/pages/update-form-bloc/update-form-bloc.component';
import { EquipeComponent } from 'src/app/pages/equipe/equipe.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    
    { path: 'equipe',         component: EquipeComponent},
    { path: 'bloc',           component: BlocComponent },
    { path: 'bloc-form', component: FormBlocComponent },
    { path: 'update-form-bloc',component: UpdateFormBlocComponent },
    { path: 'updateBloc/:idBloc', component: UpdateFormBlocComponent },

    { path: 'etudiant',      component: EtudiantComponent },
    { path: 'etudiant-form',      component: EtudiantFormComponent },
    { path: 'update-etudiant-form',      component: UpdateEtudiantFormComponent },
    { path: 'etudiantUpdate/:id', component: UpdateEtudiantFormComponent }, 
];
