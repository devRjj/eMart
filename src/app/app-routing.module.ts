import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleGuard } from './shared/guards/shared-module.guard';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'categories',
    canLoad: [SharedModuleGuard],
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'product',
    canLoad: [SharedModuleGuard],
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'dashboard',
    canLoad: [SharedModuleGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'newsletter',
    loadChildren: () =>
    import('./newsletter/newsletter.module').then((m) => m.NewsletterModule),
  },
  {
    path: 'banner',
    loadChildren: () =>
    import('./banner/banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'users',
    loadChildren: () =>
    import('./users/users.module').then((m) => m.UsersModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
