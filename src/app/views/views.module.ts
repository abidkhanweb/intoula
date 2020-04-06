import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './owner/driver/create/create.component';
import { ListComponent } from './owner/driver/list/list.component';
import { DashboardComponent } from './owner/dashboard/dashboard.component';


const allComponents = [CreateComponent, ListComponent,DashboardComponent]

@NgModule({
  declarations: allComponents,
  imports: [
    CommonModule
  ],
  exports:allComponents
})
export class ViewsModule { }
