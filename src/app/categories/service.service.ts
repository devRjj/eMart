import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: string = "http://localhost:3000/";

  httpHeader: HttpHeaders = new HttpHeaders().set("Content-type", "application/json");

  constructor(private http: HttpClient) { }

  getDataFromServer(endPoint: string) 
  {
    const url = this.baseUrl + endPoint;
    return this.http.get(url);
  }


  saveDataToServer(endPoint: string, body: any) {
    const url = this.baseUrl + endPoint;

    const currentDate =
    {
      CreatedAt: new Date()
    }
    const payload =
    {
      ...currentDate,
      ...body
    }
    return this.http.post(url, payload);

  }

  UpdateDataToserver(endPoint: string, body: any)
   {
    const currentDate =
    {
      CreatedAt: new Date()
    }
    const payload =
    {
      ...currentDate,
      ...body
    }

    const url = this.baseUrl + endPoint;
    return this.http.put(url, payload);
  }

  DeleteDataFromserver(endPoint: string) 
  {
    const url = this.baseUrl + endPoint;
    return this.http.delete(url);
  }

 
}

