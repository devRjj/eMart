import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AllproductserviceService } from 'src/app/shared/services/allproductservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  displayedColumns: string[] = [
    'Product',
    'Created',
    'Status',
    'Rating',
    'price',
    'Feactured',
    'Actions',
  ];
  dataSource!: MatTableDataSource<any>;

  TodaysDate = new Date();
  constructor(
    private productlistservice: AllproductserviceService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productlistadded();
  }

  productlistadded() {
    this.productlistservice.GetDataToServer('product').subscribe((el: any) => {
      console.log(el);
      this.dataSource = new MatTableDataSource(el);
    });
  }

  OnDelete(rowData: any) {
    alert(
      'Do you really want to delete  ? Category will be Deleted permanently.'
    );
    let selectedIndex = this.dataSource.data.findIndex(
      (el: any) => el.id === rowData.id
    );
    console.log('selectedIndex', selectedIndex);

    const endpoint = 'product/' + rowData.id;
    this.productlistservice.DeleteDataToServer(endpoint).subscribe(
      (res: any) => {
        console.log(res);

        this.dataSource.data.splice(selectedIndex, 1);
        console.log('product Deleted SucessFully...!', this.dataSource);

        alert(' Deleted SucessFully...!');
        this.dataSource._updateChangeSubscription();
      },
      (error) => {
        console.log(' product not deleted....!!');
      }
    );
  }
}
