import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { OwnDriverService } from '../../owner/driver/shared.service';
import { Item } from '../../owner/driver/model/item';


@Injectable({
    providedIn:'root'
})

export class DriverReportService implements OnInit{

    profile:Item[];

    constructor(private OwnDriverService:OwnDriverService){

    }

    ngOnInit():void{
        this.OwnDriverService.getAllDriver().subscribe(res=>{
            this.profile = res;
        });
    }


}