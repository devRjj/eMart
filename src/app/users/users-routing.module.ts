import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  { path: 'users', component:UsersComponent },
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
