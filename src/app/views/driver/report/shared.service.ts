import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
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