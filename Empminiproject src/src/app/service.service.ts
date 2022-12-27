import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeForm } from './model/employee-form';
import { Observable, Subject } from 'rxjs';
import { EmployeeComponent } from './employee/employee.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";
  empls=new Subject();
  EmployeeSave(emp:EmployeeForm)
  {
      return this.http.post<EmployeeForm>(this.url+"/getAllData",emp);
  }

  employeeGetData():Observable<EmployeeForm[]>
  {
     return this.http.get<EmployeeForm[]>(this.url+"/getAllData");
  }
  deleteEmployeeData(sid:any)
  {
    // const url=`${this.url}/getAllData/${sid}`;
    console.log(sid);
      return this.http.delete<EmployeeComponent>(this.url + "/getAllData/" + sid);
  }
  getEmployee(sid:any):Observable<EmployeeComponent>

 {  const url=`${this.url}/getAllData/${sid}`;

     return this.http.get<EmployeeComponent>(url);

 }

 

 updateEmployee(sid:any, e:EmployeeForm):Observable<EmployeeForm[]>{

  const url=`${this.url}/getAllData/${sid}`;

     return this.http.put<EmployeeForm[]>(url,e);

 }

 setEmployee(empls:any)

 {

   this.empls.next(empls);

 }
  
}
