import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PrimecomponentsModule } from './primecomponents.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
/*
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {SlideMenuModule} from 'primeng/slidemenu';*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    PrimecomponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
    /*SidebarModule,
    AccordionModule,
    CarouselModule,
    SlideMenuModule,
    ButtonModule*/
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
