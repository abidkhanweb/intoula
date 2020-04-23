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

  allDrivers:Item[];

  editForm:any = new FormGroup({
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


  displayModal: boolean;

 

  position: string;

  showModalDialog() {
      this.displayModal = true;
  }

  constructor(private OwnDriverService:OwnDriverService) { }

  ngOnInit(): void {
    this.OwnDriverService.getAllDriver().subscribe(res=>{
      this.allDrivers = res;
      console.log(res);
    })

    this.OwnDriverService.setData();
  }

  getDocId(id){
      console.log(id);
  }

  deleteDriver(id){
    this.OwnDriverService.deleteDoc(id);
  }

  submitForm(){
    this.OwnDriverService.createDoc(this.editForm.value);
  }

}
