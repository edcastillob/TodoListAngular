import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';



const routes: Routes = [
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'register',
    component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
