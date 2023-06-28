import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  baseUrl:string="http://localhost:3000/";
  HttpHeader:HttpHeaders= new HttpHeaders().set('Content-Type', 'Application/json');
  constructor(private http:HttpClient) {


   }

   getDataToServer(endPoint:string){
    const Url = this.baseUrl + endPoint;
    return this.http.get(Url, {headers:this.HttpHeader})
   }

   postDataToServer(endPoint:string, body:any){
    const Url = this.baseUrl + endPoint;
    return this.http.post(Url, body, {headers:this.HttpHeader})
   }

   UpdateDataToServer(endPoint:any, body:any){
    const url = this.baseUrl + endPoint;
    return this.http.put(url, body, {headers:this.HttpHeader});
  }
  DeleteDataToServer(endPoint:any){
    const url = this.baseUrl + endPoint;
    return this.http.delete(url, {headers:this.HttpHeader});
  }
}
