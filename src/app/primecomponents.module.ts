import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {SlideMenuModule} from 'primeng/slidemenu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    AccordionModule,
    CarouselModule,
    SlideMenuModule,
    ButtonModule
  ],
  exports:[
    CommonModule,
    SidebarModule,
    AccordionModule,
    CarouselModule,
    SlideMenuModule,
    ButtonModule
  ]
  
})
export class PrimecomponentsModule { }
