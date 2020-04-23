import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnDriverService } from '../shared.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class OwnerCreateDriverComponent implements OnInit {


  selectedImage: any = null;
  url:string;
  id:string;
  file:string;



  
  value: Date;

  constructor(private OwnDriveService:OwnDriverService,@Inject(AngularFireStorage) private storage: AngularFireStorage, @Inject(OwnDriverService) private fileService: OwnDriverService) { }

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
    this.fileService.getImageDetailList();
  }


  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }

  save() {
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
    finalize(() => {
    fileRef.getDownloadURL().subscribe((url) => {
    this.url = url;
    this.fileService.insertImageDetails(this.id,this.url);
    alert('Upload Successful');
    })
    })
    ).subscribe();
    }
    view(){
    this.fileService.getImage(this.file);
    }
















  submitForm(){
    this.OwnDriveService.createDoc(this.driverForm.value);
  }

}
