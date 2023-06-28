import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent {
  displayedColumns: string[] = ['Category', 'Discription','Total-item', 'Created At', 'Action'];
  dataSource!: MatTableDataSource<any>;
  todaysDate = new Date();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private http: HttpService,private router:Router) 
  { }

  ngOnInit(): void
  {
    this.CatgList();
  }

  CatgList()
  {
   this.http.getDataToServer("data").subscribe((res: any) => 
   {
     this.dataSource = new MatTableDataSource(res);
     // console.log(res);
     console.log("data Fetched sucessfully");
     this.dataSource.paginator = this.paginator;
  
   }, error => { }
   )
 }

 OnDelete(rowData: any) 
  {
    alert("Do you really want to delete  ? Category will be Deleted permanently.")
   
     // console.log(rowData);
    let selectedIndex = this.dataSource.data.findIndex((el: any) => el.id === rowData.id);
    console.log("selectedIndex", selectedIndex);
   
    const endpoint = "data/" + rowData.id;
    this.http.DeleteDataToServer(endpoint).subscribe((res: any) => 
    {
      console.log(res);
    
      this.dataSource.data.splice(selectedIndex, 1);
      console.log("Category Deleted SucessFully...!", this.dataSource);

      alert("Category Deleted SucessFully...!");
      this.dataSource._updateChangeSubscription();
    },
      error => 
      {
        console.log(" Category not deleted....!!")
      })

    }
 

}
