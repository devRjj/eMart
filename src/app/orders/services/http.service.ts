import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  baseUrl:string="http://localhost:3000/";

  httpHeader:HttpHeaders = new HttpHeaders()
                           .set("Content-type","application/json")

  constructor(private httpClient:HttpClient) { }
   
 
   getDataFromServer(endPoint: string) {
     const url = this.baseUrl + endPoint;
     return this.httpClient.get(url);
   } 

   /* saveDataToServer(endPoint:string,requestBody:any){
    const url = this.baseUrl + endPoint ;
    return this.httpClient.post(url,requestBody);
  } */
}

