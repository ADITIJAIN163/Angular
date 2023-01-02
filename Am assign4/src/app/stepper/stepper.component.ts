import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { StepperForm } from '../model/stepper';
import { MyserviceService } from '../myservice.service.service';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  isLinear = false;
  user!:StepperForm[]  
  firstFormGroup!: FormGroup;  
  secondFormGroup!: FormGroup;  
  thirdFormGroup!:FormGroup;
  
  constructor(private _formBuilder: FormBuilder,private cs:MyserviceService) {}  
  
  ngOnInit() {  
    this.firstFormGroup = this._formBuilder.group({  
      Name:['', Validators.required],
	    email:['', Validators.required],
    Mobile:['', Validators.required],
    FN:['', Validators.required],
    MN:['', Validators.required],
    Gender:['', Validators.required],
    Date:['', Validators.required],
    AName:['', Validators.required],
    BNo:['', Validators.required],
    BName:['', Validators.required],
    IFSC:['', Validators.required],
    q1:['', Validators.required],
    q2:['', Validators.required], 
    PreA:['', Validators.required],
    PerA:  ['', Validators.required], 
    
    });  
  }  
  onSubmit()
  {  
   
    this.cs.employeeSaveStepper(this.firstFormGroup.value).subscribe();
    //window.location.reload();
    //console.log("1")
  
 }
}


