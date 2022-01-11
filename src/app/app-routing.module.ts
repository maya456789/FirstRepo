import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent} from './employee/employee-login/employee-login.component';

const routes: Routes = [
 /* {path:'',redirectTo:'emplogin',pathMatch:'full'},
  {path:'emplogin',component:EmployeeLoginComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
