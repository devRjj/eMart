import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { SubCategoriesFormComponent } from './sub-categories-form/sub-categories-form.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCatComponent } from './create-cat/create-cat.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    MainCategoriesComponent,
    SubCategoriesComponent,
    SubCategoriesFormComponent,
    CreateCatComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
