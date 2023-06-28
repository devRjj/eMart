import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  ngOnInit(): void {}

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Column Chart'
    },
    xAxis: {
      categories: ['Vivo', 'Apple', 'Samsung', 'Xiaomi', 'Oppo']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      type: 'column', // Specify the series type as 'column'
      name: 'Value',
      data: [10, 20, 15, 8, 12]
    }]
  };


  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie' // Set the chart type as 'pie' for the doughnut chart
    },
    title: {
      text: 'Doughnut Chart'
    },
    plotOptions: {
      pie: {
        innerSize: '50%' // Set the inner size to create a doughnut chart
      }
    },
    series: [{
      type: 'pie', // Specify the series type as 'pie'
      name: 'Value',
      data: [
        { name: 'Vivo', y: 10 },
        { name: 'Apple', y: 20 },
        { name: 'Samsung', y: 15 },
        { name: 'Xiaomi', y: 8 },
        { name: 'Oppo', y: 12 }
      ]
    }]
  };

  salesSummaryData = [
    {
      text: 'Daily Earnings',
      dynamicData: '100',
      image: 'monetization_on'
    },
    {
      text: 'Daily Orders',
      dynamicData: '75',
      image: 'receipt'
    },
    {
      text: 'SignUp users',
      dynamicData: '50',
      image: 'supervisor_account'
    },
    {
      text: 'Total Product',
      dynamicData: '125',
      image: 'account_balance'
    }
  ];
  
}
