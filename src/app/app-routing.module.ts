import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageLayoutComponent } from './page-design/page-layout/page-layout.component';
import { Router } from '@angular/router'; 

const routes: Routes = [
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:PageLayoutComponent,
    path:"home"
  },
  {
    component:LoginComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
