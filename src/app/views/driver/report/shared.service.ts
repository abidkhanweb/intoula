import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { OwnDriverService } from '../../owner/driver/shared.service';
import { Item } from '../../owner/driver/model/item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class DriverReportService implements OnInit{

    profile:Item[];

    driverReport:Observable<Item[]>;
    driverReportCollect:any;

    constructor(private OwnDriverService:OwnDriverService, private db:AngularFirestore){
        this.driverReportCollect = db.collection("driver").doc("reports").collection("report");
    }


    getAllReport(){
        this.driverReport = this.db.collection("driver").doc("reports").collection("report").snapshotChanges().pipe(
    
          map(actions=>{
            return actions.map(a=>{
              
              // Get data as Item
              const data = a.payload.doc.data() as Item;
    
              // Get Doc ID 
              const docId = a.payload.doc.id;
    
              // Return Data and Doc ID
              return { docId, ...data };
    
            });
          })
        );
    
        return this.driverReport;
      }

      createDoc(data){
        this.driverReportCollect.add({
          firstName:data.firstName,
          lastName:data.lastName,
          inTime:data.inTime,
          outTime:data.outTime,
          expense:data.expense,
          shift:data.shift,
          rides:data.rides,
          revenue:data.revenue,
        })
      }
    
      deleteDoc(id){
        this.driverReportCollect.doc(id).delete();
      }
    
      /*setData(){
        this.driverCollect.doc("fmVyasduzSeunNElAsjORLt").set({
        media:'',
        firstName:'Gulam',
        lastName:'Jilani',
        contactNumber:'8652458547',
        email:'gulamjilaniset@gmail.com',
        address:'Malad',
        age:'28',
        fuelType:'CNG',
        joiningDate:'15-03-2020',
        vehicleNumber:'MH 04 - 5263',
        vehicleModel:'Honda City - Ivtec'
        })
      }*/
    
      updateDoc(data){
        console.log(data);
        this.driverReportCollect.doc(data.docId).set(
        data,
        {merge: true});
      }

    ngOnInit():void{
        
    }


}