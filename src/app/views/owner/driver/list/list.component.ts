import { Component, OnInit } from '@angular/core';
import { OwnDriverService } from '../shared.service';
import { Item } from '../model/item';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class OwnerDriverComponent implements OnInit {

  allDrivers:Item[];

  constructor(private driverService:OwnDriverService) { }

  ngOnInit(): void {
    this.driverService.getAllDriver().subscribe(res=>{
      this.allDrivers = res;
      console.log(res);
    })

    this.driverService.setData();
  }

}
