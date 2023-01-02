import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  { path: "reg", component: RegistrationComponent },
 { path: "log", component: LoginComponent } ,{path:"home",component:HomeComponent},{path:"step",component:StepperComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
