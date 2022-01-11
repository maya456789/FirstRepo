import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeLoginComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class EmployeeModule { }
