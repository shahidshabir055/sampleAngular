import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private apiService: ApiService) { }
  fetch_data(data:any){
    return this.apiService.connectRestApi(
      'POST',
      'url',
      data
    );
  }
  get_data(email:any){
    return this.apiService.connectRestApi(
      'GET',
      'url',
      email
    );
  }
}

