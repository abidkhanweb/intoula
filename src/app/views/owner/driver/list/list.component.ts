import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OwnDriverService } from '../shared.service';
import { Item } from '../model/item';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class OwnerDriverComponent implements OnInit {

  value: Date;

  allDrivers:Item[];

  editForm:any = new FormGroup({
    docId:new FormControl(),
    media:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    contactNumber:new FormControl(),
    email:new FormControl(),
    age:new FormControl(),
    fuelType:new FormControl(),
    joiningDate:new FormControl(),
    vehicleNumber:new FormControl(),
    vehicleModel:new FormControl(),
    address:new FormControl(),
  });


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


  displayModal: boolean;

 

  //position: string;

  showModalDialog() {
      this.displayModal = true;
  }

  constructor(private OwnDriverService:OwnDriverService) { }

  ngOnInit(): void {
    this.OwnDriverService.getAllDriver().subscribe(res=>{
      this.allDrivers = res;
      console.log(res);
    })

    //this.OwnDriverService.setData();
  }

  

  deleteDriver(id){
    this.OwnDriverService.deleteDoc(id);
  }

  submitForm(){
    this.OwnDriverService.updateDoc(this.editForm.value);
  }

  

}
