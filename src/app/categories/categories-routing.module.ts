import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { SubCategoriesFormComponent } from './sub-categories-form/sub-categories-form.component';
import { CreateCatComponent } from './create-cat/create-cat.component';

const routes: Routes = [
  { path: '', component: MainCategoriesComponent },
  { path: 'main', component: MainCategoriesComponent },
  { path: 'sub', component: SubCategoriesComponent },
  {path:'subform', component:SubCategoriesFormComponent},
  {path:"addCateogeory/:id", component:SubCategoriesFormComponent},

  { path: 'addmainCateogeory', component: CreateCatComponent },
  { path: 'addmainCateogeory/:id',component:CreateCatComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
