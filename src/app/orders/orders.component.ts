import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from './services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
 
  ngOnInit(): void {
    this.getUserList();
    
  }

constructor(private http:HttpService){

}

  displayedColumns: string[] = ['product', 'date', 'status', 'price','quantity','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  getUserList(){
    this.http.getDataFromServer('products').subscribe((response:any)=>{
      if(response  ){
         this.dataSource = new MatTableDataSource(response);
         this.dataSource.paginator = this.paginator ;
         this.dataSource.sort  = this.sort;
         console.log(response);
       }
    },
    error=>{

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




}