import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class ProductModule { }
