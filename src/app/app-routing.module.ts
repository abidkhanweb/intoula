import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsModule } from './views/views.module';
import { OwnerDashboardComponent } from './views/owner/dashboard/dashboard.component';
import { OwnerDriverComponent } from './views/owner/driver/list/list.component';
import { OwnerReportComponent } from './views/owner/report/list/list.component';
import { OwnerCreateDriverComponent } from './views/owner/driver/create/create.component';
import { OwnerDriverViewComponent } from './views/owner/driver/view/view.component';


const routes: Routes = [
  { path:'', component:OwnerDashboardComponent, pathMatch:'full'},
  { path:'create-driver', component:OwnerCreateDriverComponent},
  { path:'driver', component:OwnerDriverComponent},
  { path:'view', component:OwnerDriverViewComponent},
  { path:'report', component:OwnerReportComponent},
  
];

@NgModule({
  imports: [ViewsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
