import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Modules */
import { ViewsModule } from './views/views.module';
import { PrimecomponentsModule } from './primecomponents.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


/* Service */
import { OwnDriverService } from './views/owner/driver/shared.service';
import { DataService } from './data.service';

/* Components */
import { AppComponent } from './app.component';
import { ViewComponent } from './views/view.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { environment } from '../environments/environment';

/* Directive */
import { TestDirective } from './directive/test.directive';



/* Firebase configuration */


@NgModule({
  declarations: [
    AppComponent,
    CreateDriverComponent,
    ViewComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TestDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ViewsModule,
    PrimecomponentsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    
  ],
  providers: [OwnDriverService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* OwnerDashboardComponent
OwnerCreateDriverComponent
OwnerDriverComponent
OwnerDriverViewComponent
OwnerNotificationComponent
OwnerReportComponent


DriverDashboardComponent
DriverViewComponent
DriverCreateReportComponent
DriverViewReportComponent*/