import { Component, OnInit } from '@angular/core';
import { DriverReportService } from 'src/app/views/driver/report/shared.service';
import { Item } from '../../../driver/report/model/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class OwnerReportComponent implements OnInit {

  allReport:Item[];
  driverReportCollect:any;

  constructor(private driverReportService:DriverReportService){
}

  ngOnInit(): void {
    this.driverReportService.getAllReport().subscribe(res=>{
      this.allReport = res;
    });

   
  }

}
