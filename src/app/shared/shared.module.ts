import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { AllproductserviceService } from './services/allproductservice.service';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SidenavComponent,
  ]
})
export class SharedModule { }
