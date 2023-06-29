import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewComponent } from './view/view.component';
import { userInterface } from '../model/usersModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'password', 'phone', 'status', 'joinedOn', 'actions'];

  dataSource!: MatTableDataSource<any>;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get('http://localhost:3000/users').subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  onView(user: userInterface){
    const config = new MatDialogConfig();
    config.width = '600px'
    config.data = {
      name: user.name,
      email: user.email,
      phone: user.phone
    }
    this.dialog.open(ViewComponent, config)
  }
}