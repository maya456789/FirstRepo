import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

   title="Property binding example...!"
   expression="Binding with interpolation...!"
   uname="Gopal";
   imgpath="./assets/FB_IMG_15175001713165589.jpg"
   isDisabled=true;
   isShow=false;
    rl="all";
    dropvalue;

  constructor() { }

  ngOnInit(): void {
  }

  addData(uname:any){
     console.log(uname.value);
  }

   addswitch(add:any){
     this.dropvalue=add.target.value;
     console.log(add.target.value);
   }
   txtval(tval:any){
     console.log(tval.target.value)
   }
   showDetail(){
     this.isShow=!this.isShow;
   }
}
