import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnDriverService } from '../shared.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class OwnerCreateDriverComponent implements OnInit {
  
  value: Date;

  constructor(private driveService:OwnDriverService) { }

  driverForm:any = new FormGroup({
    media:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    contactNumber:new FormControl(),
    age:new FormControl(),
    address:new FormControl(),
    joiningDate:new FormControl(),
    fuelType:new FormControl(),
    vehicleModel:new FormControl(),
    vehicleNumber:new FormControl()
  })

  

  ngOnInit(): void {
  }

  submitForm(){
    this.driveService.createDoc(this.driverForm.value);
  }

}
