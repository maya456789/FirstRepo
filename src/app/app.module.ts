import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { EmployeeModule } from './employee/employee.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { PropertyComponent } from './types/property-binding/property/property.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    PropertyComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [PropertyComponent]
})
export class AppModule { }
