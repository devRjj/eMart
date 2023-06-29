import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner.component';
import { HomeBannersComponent } from './home-banners/home-banners.component';
import { HomeSlidesComponent } from './home-slides/home-slides.component';
import { NotificationComponent } from './notification/notification.component';
import { BannerFormComponent } from './banner-form/banner-form.component';

const routes: Routes = [{ path: '', component: BannerComponent , children:[
  {path:'Home-Banner', component:HomeBannersComponent},
  {path:'Home-Slide', component:HomeSlidesComponent},
  {path:'Notification', component:NotificationComponent},
  {path:'Banner-Form', component:BannerFormComponent},
  {path:'',redirectTo:'/banner/Home-Slide',pathMatch:'full'}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
