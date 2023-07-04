import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular'
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    MaterialModule
  ]
})
export class DashboardModule { }
