import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { HomeBannersComponent } from './home-banners/home-banners.component';
import { HomeSlidesComponent } from './home-slides/home-slides.component';
import { NotificationComponent } from './notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BannerComponent,
    BannerFormComponent,
    HomeBannersComponent,
    HomeSlidesComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BannerModule { }
