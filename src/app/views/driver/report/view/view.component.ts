import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DriverReportService } from '../shared.service';
import { Item } from '../model/item';

@Component({
  selector: 'd-app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class DriverViewReportComponent implements OnInit {

  allReport:Item[];
  
  inTimePicker:Date;
  outTimePicker:Date;

  displayModal: boolean;

  constructor(private driverReportService:DriverReportService) { }

  editForm:any = new FormGroup({
    docId:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    /*inTime:new FormControl(),
    outTime:new FormControl(),*/
    expense:new FormControl(),
    shift:new FormControl(),
    rides:new FormControl(),
    revenue:new FormControl(),
  });

  ngOnInit(): void {
    this.driverReportService.getAllReport().subscribe(res=>{
      this.allReport = res;
    })
  }

  showModalDialog() {
    this.displayModal = true;
  }

  //inTime,outTime,
  getDocId(id,firstName,lastName,expense,shift,rides,revenue){
    this.editForm.setValue({
      docId: id,
      firstName:firstName,
      lastName:lastName,
      /*inTime:inTime,
      outTime: outTime = new Date(),*/
      expense:expense = new Date(),
      shift:shift,
      rides:rides,
      revenue:revenue,
      
    });

  }

  deleteReport(id){
    this.driverReportService.deleteDoc(id);
  }

  submitForm(){
    this.driverReportService.updateDoc(this.editForm.value);
  }

  

}
