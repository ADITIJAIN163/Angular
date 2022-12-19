import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {
  name:string="";
 
  isDisable:boolean=true;
  constructor()
  {
    
  }
Reset()
{

  this.name="";
   
}
check()
{
  if(this.name=="")
  {
    this.isDisable=true
  }
  else
  this.isDisable=false
}
}
