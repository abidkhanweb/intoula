import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class OwnerDashboardComponent implements OnInit {

  notificationPanel;
  constructor() { }

  /*counter:any;
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
      //alert(this.notificationPanel);
    },10000);
  }


  Counter:number=0;

  CounterInc(){
    setInterval(function(){
      //alert(this.notificationPanel);  
      this.Counter + 1;
    },1000);
  }
  */

  ngOnInit() {
    /*this.CounterInc();
    this.hideNotipanel();
    this.onClickNot(this.counter);*/
    console.log(this.notificationPanel);
  }



}
