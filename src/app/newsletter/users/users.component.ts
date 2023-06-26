import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private http: HttpClient){}

  ngOnInit(){
    // this.http.get('https://emartvct-default-rtdb.firebaseio.com/newsletter').subscribe(res =>{
    //   console.log(res)
    //   this.dataSource = res
    // })
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource= ELEMENT_DATA;



}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];
