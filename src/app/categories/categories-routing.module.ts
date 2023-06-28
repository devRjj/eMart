import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { SubCategoriesFormComponent } from './sub-categories-form/sub-categories-form.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'main', component: MainCategoriesComponent },
  { path: 'sub', component: SubCategoriesComponent },
  {path:'subform', component:SubCategoriesFormComponent},
  {path:"addCateogeory/:id", component:SubCategoriesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
