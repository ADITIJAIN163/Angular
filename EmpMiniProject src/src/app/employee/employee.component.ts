import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeForm } from '../model/employee-form';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private cs:ServiceService) { }
 
  emp!:EmployeeForm[]
  
  employeeform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";

  editClicked:Boolean=false;
  ngOnInit(): void {

    this.cs.employeeGetData().subscribe(list =>{

      this.emp=list
    })
    this.employeeform=this.fb.group({
      id:[''],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      address:['',[Validators.required]],
      mobno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
    
   
    })
    this.editClicked=true;
    

  }
  onSubmit()
  {
    if(this.editClicked==true)

    {

      this.cs.updateEmployee(this.employeeform.value.id,this.employeeform.value).subscribe();

      window.location.reload();

    }

    if(this.employeeform.valid)

    {

    this.cs.EmployeeSave(this.employeeform.value).subscribe();

    window.location.reload();

    }
 }
 Reset(){
  window.location.reload();
}
deleteDataById(id:any)
{
  this.cs.deleteEmployeeData(id).subscribe();
   window.location.reload();
}
edit(id:any)
{this.editClicked=true;
  this.cs.setEmployee(id).subscribe(
    { 
      next:(employee)=>
      {
        console.log(employee)
        this.employeeform=this.fb.group(
          {
            id:[employee.id],
      name:[employee.name],
      address:[employee.address],
      mobno:[employee.mobno],
      email:[employee.email]

          }
        )
      }
    }
  );
}
}
