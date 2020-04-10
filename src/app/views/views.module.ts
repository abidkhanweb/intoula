import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './owner/driver/create/create.component';
import { ListComponent } from './owner/driver/list/list.component';
import { DashboardComponent } from './owner/dashboard/dashboard.component';
import { DriverViewComponent } from './owner/driver/view/view.component';


const allComponents = [CreateComponent, ListComponent,DashboardComponent,DriverViewComponent]

@NgModule({
  declarations: [allComponents],
  imports: [
    CommonModule
  ],
  exports:allComponents
})
export class ViewsModule { }
