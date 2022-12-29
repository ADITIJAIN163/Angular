import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeForm } from './model/employee-form';
import { Observable } from 'rxjs';
import { EmployeeComponent } from './employee/employee.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";
 
  EmployeeSave(emp:EmployeeForm)
  {
      return this.http.post<EmployeeForm>(this.url+"/getAllData",emp);
  }

  employeeGetData():Observable<EmployeeForm[]>
  {
     return this.http.get<EmployeeForm[]>(this.url+"/getAllData");
  }
  deleteEmployeeData(id:any)
  {
    
    console.log(id);
      return this.http.delete<EmployeeComponent>(this.url + "/getAllData/" + id);
  }
  getEmployee(id:any):Observable<EmployeeComponent>

 {  const url=`${this.url}/getAllData/${id}`;

     return this.http.get<EmployeeComponent>(url);

 } 

 updateEmployee(id:any, e:EmployeeForm):Observable<EmployeeForm[]>{

  const url=`${this.url}/getAllData/${id}`;

     return this.http.put<EmployeeForm[]>(url,e);

 }

  setEmployee(id:any):Observable<EmployeeForm>{
    const url=`${this.url}/getAllData/${id}`;
    return this.http.get<EmployeeForm>(url);
    
  }
}
