import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }


  //department: departments = []
 
  ngOnInit() {
  }

  //Human Resource Department
  //Finance Department
  //information technology (IT) department
}
 interface departments{
    departmentName: string[];
    departmentID: string;
    departmentEmployeeCount: number;
  }