import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  connectRestApi(reqMethod: any, url:any, data:any){
    let reqHeaders = new HttpHeaders({
      'Content-Type':'application/json;'
    });
    const req = new HttpRequest(reqMethod, url,data,{
      reportProgress: true,
      headers: reqHeaders
    });
    let event = this.httpClient.request(req);
    return event;
  }
}
