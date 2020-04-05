import { Injectable,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  appointmentFirestore:Observable<Item[]>;
  constructor(private db:AngularFirestore, private http:HttpClient) { 
    this.db.collection('owner').doc('Drivers').collection('Driver');

  }

  ngOnInit(){

  }


  getAllData(){
    this.appointmentFirestore = this.db.collection('owner').doc('Drivers').collection('Driver').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
            const data = a.payload.doc.data() as Item;
              const docId = data.docId = a.payload.doc.id;
            console.log(data);
            return { docId, ...data };
        });
      })
    );
    return this.appointmentFirestore;
  }

  

}
