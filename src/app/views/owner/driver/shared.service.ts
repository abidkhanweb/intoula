import { Injectable,Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './model/item';

@Injectable({
  providedIn: 'root'
})




export class OwnDriverService implements OnInit {


  imageDetailList: AngularFireList<any>;
  fileList: any[];
  dataSet: Data = {
  id:'',
  url:''
  };
  msg:string = 'error';


  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
    }
    insertImageDetails(id,url) {
    this.dataSet = {
    id : id,
    url: url
    };
    this.imageDetailList.push(this.dataSet);
    }
    getImage(value)
    {
    this.imageDetailList.snapshotChanges().subscribe(
    list => {
    this.fileList = list.map(item => { return item.payload.val(); });
    this.fileList.forEach(element => {
    if(element.id===value)
    this.msg = element.url;
    });
    if(this.msg==='error')
    alert('No record found');
    else
    {
    window.open(this.msg);
    this.msg = 'error';
    }
    }
    );
    }

















  driver:Observable<Item[]>;
  driverCollect:any;

  constructor(private http:HttpClient, private db:AngularFirestore, @Inject(AngularFireDatabase) private firebase: AngularFireDatabase){
    this.driverCollect = db.collection("owner").doc("Drivers").collection("Driver");
  }

  getAllDriver(){
    this.driver = this.db.collection("owner").doc("Drivers").collection("Driver").snapshotChanges().pipe(

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

    return this.driver;
  }

  createDoc(data){
    this.driverCollect.add({
      media:data.media,
      firstName:data.lastName,
      lastName:data.lastName,
      contactNumber:data.contactNumber,
      email:data.email,
      address:data.address,
      age:data.age,
      fuelType:data.fuelType,
      joiningDate:data.joiningDate,
      vehicleNumber:data.vehicleNumber,
      vehicleModel:data.vehicleModel
    })
  }

  deleteDoc(id){
    this.driverCollect.doc(id).delete();
  }

  setData(){
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
  }


  ngOnInit(){
  
  }

}


export interface Data
{
id:string;
url:string;
}