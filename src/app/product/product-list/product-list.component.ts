import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  displayedColumns: string[] = ['Product', 'Created', 'Status', 'Rating','price','Feactured','Actions'];
  dataSource=[
    {'Product':'ruben led','Created':'17 jun 2023','Status':'in stock','price':'100'}
  ] 

}
