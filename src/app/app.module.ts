import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SubCategoriesComponent } from './categories/sub-categories/sub-categories.component';
import { MainCategoriesComponent } from './categories/main-categories/main-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    SubCategoriesComponent,
    MainCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
