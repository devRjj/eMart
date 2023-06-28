import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterComponent } from './newsletter.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NewsletterComponent,
    DialogBoxComponent,
    FormComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    NewsletterRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class NewsletterModule { }
