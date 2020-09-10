import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DepartmentComponent } from '../department/department.component';
import { ProjectComponent } from '..//project/project.component';
import { EmployeeComponent } from '..//employee/employee.component';

const routes: Routes = [
  {
    path: '', 
   // pathMatch: 'full',
    component: DepartmentComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  }
];

@NgModule({
  imports : [ CommonModule, RouterModule.forRoot(routes) ],
  declarations : [],
  exports : [RouterModule]
})

export class AppRoutingModule {}