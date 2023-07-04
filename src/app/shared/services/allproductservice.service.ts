import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllproductserviceService {
  baseurl:string=" http://localhost:3000/";
  headers:HttpHeaders=new HttpHeaders().set( "Content-Type", "application/json");
  constructor(private http:HttpClient) { }

  GetDataToServer(endpoint:string){
    const Url=this.baseurl+endpoint;
   return this.http.get(Url,{headers:this.headers})
  }
  PostDataToServer(endpoint:string,body:any){
    const Url=this.baseurl+endpoint;
    return this.http.post(Url,body,{headers:this.headers})
  }
  UpdateDataToServer(endPoint:any, body:any){
    const url = this.baseurl + endPoint;
    return this.http.put(url, body, {headers:this.headers});
  }
  DeleteDataToServer(endPoint:any){
    const url = this.baseurl + endPoint;
    return this.http.delete(url, {headers:this.headers});
  }


}


