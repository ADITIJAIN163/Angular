import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeForm } from './model/employeeform';
import { MyserviceService } from './myservice.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngMaterialAssign1';
  // constructor(private fb:FormBuilder,private cs:MyserviceService){}

  empform!:FormGroup;

  constructor(public dialog: MatDialog) {}

  openDialog() {

    this.dialog.open(DialogExample,{

      width: '250px',

      height:'250px'

    });
  } 
  openDialog1() {

    this.dialog.open(DialogExample1,{

      width: '250px',

      height:'250px'

    });
  } 
  
  
  

}
   



@Component({

  selector: 'DialogExample',

  templateUrl: 'dialog.html',

})
export class DialogExample{}
@Component({

  selector: 'DialogExample1',

  templateUrl: 'dialog1.html',

})
export class DialogExample1 {}