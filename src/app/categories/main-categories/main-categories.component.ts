import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.scss']
})
export class MainCategoriesComponent implements OnInit {

  // displayedColumns: string[] = ['Id','categeory', 'discription', 'Created At', 'Action'];
  
  displayedColumns: string[] = ['Category', 'Discription', 'Created At', 'Action'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private http: ServiceService,private router:Router) 
  { }

  ngOnInit(): void
  {
    this.CatgList();
  }

  CatgList()
  {
   this.http.getDataFromServer("Categories").subscribe((res: any) => 
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
   
    const endpoint = "Categories/" + rowData.id;
    this.http.DeleteDataFromserver(endpoint).subscribe((res: any) => 
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
