import { Component, OnInit } from '@angular/core';
import { EmployeeForm } from '../model/employee-form';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private cs:ServiceService) { }

  //emp!:EmployeeForm[];

  ngOnInit(): void {

  //   this.cs.employeeGetData().subscribe(list =>{

  //     this.emp=list
  //   })
 }

  
}
