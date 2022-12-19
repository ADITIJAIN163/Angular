import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  para:string="";
  clickc:number=0;
  arr:number[]=[]
  Display()
  {
    this.clickc=this.clickc+1;
    if(this.clickc%2 !=0)
    {
      this.para="Calm";
    }
    else
    this.para="";
    if(this.clickc!=1)
    this.arr[this.clickc-2]=this.clickc-1;

    
  }

}
