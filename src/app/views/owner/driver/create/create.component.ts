import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class OwnerCreateDriverComponent implements OnInit {
  
  value: Date;

  driverForm:any = new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    contactNumber:new FormControl(),
    age:new FormControl(),
    address:new FormControl(),
    joiningDate:new FormControl(),
    vehicleNumber:new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.driverForm.value);
  }

}
