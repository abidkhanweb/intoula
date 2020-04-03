import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'intoula';
  /*visibleSidebar1 = true;
  items: MenuItem[];*/
  appointmentData:Item[];
  constructor(private dataService:DataService, private http:HttpClient){
      /*const things = db.collection('owner').doc('Drivers').collection('Driver').valueChanges();
      things.subscribe(a=> {
        console.log(this.data = a)
      });*/

  }

  


  ngOnInit(){
    
    /*this.dataService.getAllData().subscribe((response:any)=>{
      this.appointmentData = response;
    })*/
  }
    /*visibleSidebar2 = true;

    visibleSidebar3 = true;

    visibleSidebar4 = true;

    visibleSidebar5 = true;*/

    

  

  
}
