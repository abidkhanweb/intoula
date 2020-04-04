import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './owner/driver/create/create.component';
import { ViewComponent } from './owner/driver/view/view.component';
import { ListComponent } from './owner/driver/list/list.component';




@NgModule({
  declarations: [CreateComponent, ViewComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
