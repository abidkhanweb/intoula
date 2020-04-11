import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    PrimecomponentsModule
  ],
  exports:allComponents
})
export class ViewsModule { }
