import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import { DialogtwoComponent } from '../dialogtwo/dialogtwo.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //  name = 'Angular ' + VERSION.major;
  
   constructor(public dialog: MatDialog) {}

employees = [{name:"Julius", surname:"Mlambo", position:"CEO", age:27},
                   {name:"Peter", surname:"Brown", position:"Executive Director", age:32},
                   {name:"Angel", surname:"Zulu", position:"Managing Director", age:22},
                   {name:"Stanly", surname:"Scott", position:"Chief Financial Office", age:28},
                   {name:"Amanda", surname:"Solo", position:"Online Manager", age:29},
                   {name:"Chris", surname:"Malana", position:"Chief Technology officer", age:33},
                   {name:"Noma", surname:"Mzobe", position:"Developer", age:22},
                   {name:"Arthur", surname:"Mazibuko", position:"Front-end developer", age:23},
                   {name:"Anathi", surname:"Xulu", position:"Software Developer", age:21},
                   {name:"Amo", surname:"Zwane", position:"Intern", age:19},
  ];

   
   openDialog(Employee) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'YES',
          cancel: 'NO'
        }
      }
    });

       dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      const index = this.employees.indexOf(Employee,0)
      if (index >-1) {
        this.employees.splice(index,1);
      }
      }
    });
     }

  update() {
    const dialogRef = this.dialog.open(DialogtwoComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'YES',
          cancel: 'NO'
        }
      }
    })
  }

  ngOnInit() {
  }

}






