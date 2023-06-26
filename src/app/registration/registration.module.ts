import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000
    })
  ],
  exports:[
    LoginComponent
  ]
})
export class RegistrationModule { }
