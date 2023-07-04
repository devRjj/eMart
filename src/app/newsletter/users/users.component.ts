import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  dataSource:any;
  displayedColumns: string[] = ['id', 'email', 'interest', 'modify'];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('http://localhost:3000/newsletter').subscribe(res =>{
      console.log(res)
      this.dataSource = res
    })
  }

  onDelete(id:any){
    this.http.delete('http://localhost:3000/newsletter/'+id).subscribe((response:any)=>{
      console.log(response);
    },
    (error:any)=>{
      console.log('ye error hai', error.message)
    })
  }  
}
