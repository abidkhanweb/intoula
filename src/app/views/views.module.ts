import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrimecomponentsModule } from '../primecomponents.module';


import { OwnerCreateDriverComponent } from './owner/driver/create/create.component';
import { OwnerDriverComponent } from './owner/driver/list/list.component';
import { OwnerDashboardComponent } from './owner/dashboard/dashboard.component';
import { OwnerDriverViewComponent } from './owner/driver/view/view.component';
import { DriverDashboardComponent } from './driver/dashboard/dashboard.component';
import { DriverViewComponent } from './driver/profile/profile.component';
import { DriverCreateReportComponent } from './driver/report/create/create.component';
import { DriverViewReportComponent } from './driver/report/view/view.component';











const allComponents = [OwnerCreateDriverComponent, OwnerDriverComponent,OwnerDashboardComponent,OwnerDriverViewComponent,DriverDashboardComponent,DriverViewComponent,DriverCreateReportComponent,DriverViewReportComponent];

@NgModule({
  declarations: [allComponents],
  imports: [
    CommonModule,
    PrimecomponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[allComponents]
})
export class ViewsModule { }
