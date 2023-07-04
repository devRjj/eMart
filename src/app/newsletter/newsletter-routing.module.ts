import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './newsletter.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: NewsletterComponent,
children: [
  {path: 'newsletter/users', component: UsersComponent},
  {path: 'forms', component: FormComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsletterRoutingModule { }
