import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { ViewsModule } from './views/views.module';
import { ViewComponent } from './views/view.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateDriverComponent,
    ViewComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ViewsModule,
    PrimecomponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, ViewsModule // storage
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
