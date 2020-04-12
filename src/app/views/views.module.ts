import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { OwnerCreateDriverComponent } from './owner/driver/create/create.component';
import { OwnerDriverComponent } from './owner/driver/list/list.component';
import { OwnerDashboardComponent } from './owner/dashboard/dashboard.component';
import { OwnerDriverViewComponent } from './owner/driver/view/view.component';
import { PrimecomponentsModule } from '../primecomponents.module';


const allComponents = [OwnerCreateDriverComponent, OwnerDriverComponent,OwnerDashboardComponent,OwnerDriverViewComponent]

@NgModule({
  declarations: [allComponents],
  imports: [
    CommonModule,
    PrimecomponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:allComponents
})
export class ViewsModule { }
