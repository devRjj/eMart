import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    SignupComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000
    })
  ],
  exports:[
    LoginComponent
  ]
})
export class UsersModule { }
