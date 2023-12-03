import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyerComponent } from './foyer/foyer.component';
import { UpdateFoyerFormComponent } from './update-foyer-form/update-foyer-form.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { FoyerStatisticsComponent } from './foyer-statistics/foyer-statistics.component';
const routes: Routes = [
  { path: '', component: FoyerComponent },
  { path: 'foyer-form', component: FoyerFormComponent },
  { path: 'foyer-statistics', component: FoyerStatisticsComponent },
  { path: 'foyerUpdate/:id', component: UpdateFoyerFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyersRoutingModule { }
