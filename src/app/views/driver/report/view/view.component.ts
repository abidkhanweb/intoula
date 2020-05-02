import { Component, OnInit } from '@angular/core';
import { DriverReportService } from '../shared.service';
import { Item } from '../model/item';

@Component({
  selector: 'd-app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class DriverViewReportComponent implements OnInit {

  allReport:Item[];

  constructor(private driverReportService:DriverReportService) { }

  
  
  getDocId(id,media,firstName,lastName,contactNumber,email,age,fuelType,joiningDate,vehicleNumber,vehicleModel,address){
    this.editForm.setValue({
      docId: id,
      media: media,
      firstName:firstName,
      lastName:lastName,
      contactNumber:contactNumber,
      email: email,
      age:age,
      fuelType:fuelType,
      joiningDate:joiningDate = new Date(),
      vehicleNumber:vehicleNumber,
      vehicleModel:vehicleModel,
      address:address,
    });

  }

  ngOnInit(): void {
    this.driverReportService.getAllReport().subscribe(res=>{
      this.allReport = res;
    })
  }

}
