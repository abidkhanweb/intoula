import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';






const allModules = [CommonModule, SidebarModule, AccordionModule, CarouselModule, SlideMenuModule, ButtonModule, PanelMenuModule,BreadcrumbModule,CardModule,InputTextModule,InputTextareaModule];


@NgModule({
  declarations: [],
  imports: [allModules],
  exports: [allModules]
  
})
export class PrimecomponentsModule { }
