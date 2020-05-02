import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class OwnerDashboardComponent implements OnInit {

  notificationPanel:Boolean=false;
  constructor() { }

  counter:any;
  onClickNot(counter){
    
    if(counter==0){
      counter+1;
      this.notificationPanel = true;
      console.log(counter);
    }
    else{
      return false;
    }
    counter=0;
    console.log(counter);
  }

  hideNotipanel(){
    setTimeout(function(){
      
      this.notificationPanel = true;
      alert(this.notificationPanel);
    },10000);
  }


  

  ngOnInit() {
    this.hideNotipanel();
    this.onClickNot(this.counter);
    console.log(this.notificationPanel);
  }



}
