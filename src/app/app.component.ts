import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit {
  title = 'Welcome to property binding';
  one;two;three;
  tgimg="../assets/2525137.jpg";
  per=300; pix=200;
  isDisabled=true;
  backclr="special";
  parentItem='lamp';
  parentobj=[{
    id:10,name:'r1'
  }];
  uname="Peter12";
  csp:number=3;
  isActive:boolean=false;
  Student:string="Student Details";
  clsp=2;
  FirstName:string="Raghav";
  LastName:string="gupta";
  Mobile:number=5454854455;
  email="r@gmail.com";
  Password="r18569";
  address="Mumbai";
  dropValue;
  public constructor(){

  };

  ngOnInit(){
     
  }

  dt=localStorage.setItem('name','ShreeRam');
  dt1=localStorage.setItem('id','S11');

  dat=localStorage.getItem('id');

  showDetail(){
    this.isActive=!this.isActive;
  }
  
  setDropValue(drpValue:any){
      this.dropValue=drpValue.target.value;
  }
  showData(uname:any){
    this.isDisabled=false;
    console.log("button is clicked!"); if(uname) {
      console.log(uname);
    this.one=true;
    
    }
    }

    
}
