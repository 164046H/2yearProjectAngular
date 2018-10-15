import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

import { LoggedHeaderComponent} from "./../SharePart/logged-header/logged-header.component";
import { LoginUserInterfaceComponent } from './login-user-interface/login-user-interface.component';

import { ShowEmployeesDetailsComponent } from './show-employees-details/show-employees-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

//import { AuthRCGuard} from "./../auth-rc.guard"
import { AuthRoleGuard } from "./../AuthGards/auth-role.guard";
import { AuthLoginGuard } from "./../AuthGards/auth-login.guard";
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { SignupEmployeeComponent } from './signup-employee/signup-employee.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { UpdateRolesComponent } from './update-roles/update-roles.component';
import { ShowDepartmentsDetailsComponent } from './show-departments-details/show-departments-details.component';
import { ShowRolesDetailsComponent } from './show-roles-details/show-roles-details.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  imports: [

    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatTabsModule,
    

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'list', component: ShowEmployeesDetailsComponent,canActivate:[AuthLoginGuard]},
      
      { path: 'login', component: LoginUserInterfaceComponent },
      { path: 'list/:id', component: EmployeeDetailsComponent ,canActivate:[AuthRoleGuard],data: { expectedRole1: 'AD'} },
      { path: 'delete/:id', component: DeleteEmployeeComponent },
      { path: 'cd', component: DepartmentCreateComponent },
      { path: 'cp', component: RoleCreateComponent },
      { path: 'update/:id', component: UpdateEmployeeComponent },
      { path: 'upd/:id', component: UpdateDepartmentComponent },
      { path: 'upr/:id', component: UpdateRolesComponent },
      
      { path: 'admin', component: AdminPageComponent,canActivate:[AuthRoleGuard],data: { expectedRole1: 'AD'}},
      
    ])
  ],
  declarations: [LoggedHeaderComponent,LoginUserInterfaceComponent, ShowEmployeesDetailsComponent, EmployeeDetailsComponent,  DeleteEmployeeComponent, LoginEmployeeComponent, SignupEmployeeComponent, DepartmentCreateComponent, RoleCreateComponent, UpdateEmployeeComponent, UpdateDepartmentComponent, UpdateRolesComponent, ShowDepartmentsDetailsComponent, ShowRolesDetailsComponent, AdminPageComponent]
})
export class ProfileModule { }
 