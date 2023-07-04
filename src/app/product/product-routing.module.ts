import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [{ path: '', component: ProductComponent,children:[
  
  {path:'product-list',component:ProductListComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'add-product/:id',component:AddProductComponent},
  {path:'',redirectTo:'product-list',pathMatch:'full'}
] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
