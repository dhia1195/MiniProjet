import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoyersRoutingModule } from './foyers-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { FoyerComponent } from './foyer/foyer.component';
import { UpdateFoyerFormComponent } from './update-foyer-form/update-foyer-form.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FoyerComponent,UpdateFoyerFormComponent,FoyerFormComponent],
  imports: [
    CommonModule,
    FoyersRoutingModule,
    FormsModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FoyersModule { }
