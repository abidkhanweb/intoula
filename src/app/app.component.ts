import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'intoula';
  /*visibleSidebar1 = true;
  items: MenuItem[];*/


  constructor(private db:AngularFirestore){
    const things = db.collection('test').valueChanges();
      things.subscribe(console.log);
  }

    /*visibleSidebar2 = true;

    visibleSidebar3 = true;

    visibleSidebar4 = true;

    visibleSidebar5 = true;*/

    ngOnInit(){

    }

  

  
}
