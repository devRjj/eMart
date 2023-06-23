import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent {
  displayedColumns: string[] = ['Categary', 'Discription', 'TotalItem', 'CreatedAt', 'Action'];
  // dataSource!: MatTableDataSource<any>;
  data = [
  {position: 3, name: 'Lithium', weight: 6, symbol: '20/06/2023', Action:'Delete'},
  {position: 4, name: 'Beryllium', weight: 9, symbol: '20/06/2023', Action:'Delete'},
  {position: 5, name: 'Boron', weight: 10, symbol: '20/06/2023', Action:'Delete'},
  {position: 6, name: 'Carbon', weight: 12, symbol: '20/06/2023', Action:'Delete'},
  {position: 7, name: 'Nitrogen', weight: 14, symbol: '20/06/2023', Action:'Delete'},
  {position: 8, name: 'Oxygen', weight: 15, symbol: '20/06/2023', Action:'Delete'},
  {position: 9, name: 'Fluorine', weight: 18, symbol:'20/06/2023', Action:'Delete'}
  ];

  @ViewChild(MatTable) table: MatTable<any> | undefined;

  addData() {
    
  }

  removeData() {
   
  }

}