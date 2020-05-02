import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DriverReportService } from '../shared.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class DriverCreateReportComponent implements OnInit {

  inTimePicker:Date;
  outTimePicker:Date;

  driverReportForm:any = new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    inTime:new FormControl(),
    outTime:new FormControl(),
    expense:new FormControl(),
    shift:new FormControl(),
    rides:new FormControl(),
    revenue:new FormControl(),
  });

  constructor(private driverReportService:DriverReportService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.driverReportService.createDoc(this.driverReportForm.value);
  }

}
