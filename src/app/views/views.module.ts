import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './owner/driver/create/create.component';
import { ViewComponent } from './owner/driver/view/view.component';
import { ListComponent } from './owner/driver/list/list.component';
import { DashboardComponent } from './owner/dashboard/dashboard.component';


const allComponents = [CreateComponent, ViewComponent, ListComponent,DashboardComponent]

@NgModule({
  declarations: [allComponents],
  imports: [
    CommonModule
  ],
  exports:[
    allComponents
  ]
})
export class ViewsModule { }
