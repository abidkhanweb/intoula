import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsModule } from './views/views.module';
import { DashboardComponent } from './views/owner/dashboard/dashboard.component';
import { ListComponent } from './views/owner/driver/list/list.component';
import { ReportListComponent } from './views/owner/report/list/list.component';
import { CreateComponent } from './views/owner/driver/create/create.component';
import { DriverViewComponent } from './views/owner/driver/view/view.component';


const routes: Routes = [
  {  path:'', component:DashboardComponent, pathMatch:'full'},
  {  path:'create-driver', component:CreateComponent},
  {  path:'driver', component:ListComponent},
  {  path:'report', component:ReportListComponent},
  {  path:'view', component:DriverViewComponent}
];

@NgModule({
  imports: [ViewsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
