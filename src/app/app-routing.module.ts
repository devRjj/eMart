import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { SharedModuleGuard } from './shared/guards/shared-module.guard';

const routes: Routes =[
  {path: 'login', component:LoginComponent},
  { path: 'categories',
  canLoad: [SharedModuleGuard],
  loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'product',
  canLoad: [SharedModuleGuard],
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'dashboard',
  canLoad: [SharedModuleGuard],
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'registration',
  canLoad: [SharedModuleGuard],
  loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'newsletter', loadChildren: () => import('./newsletter/newsletter.module').then(m => m.NewsletterModule) },
  { path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule) },
  {path: '**', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
