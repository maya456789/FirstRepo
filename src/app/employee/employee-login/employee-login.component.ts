import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  subject="Rahul";
  message="Welcome";
  myData: any;
  subData: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.subData = formData.value;
    }
  }
}
