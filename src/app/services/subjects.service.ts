import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  url = new Subject<any>();
  constructor() { }
  //to communicate among components
  getUrl(){
    this.url.asObservable();
  }
  sendUrl(url: any){
    this.url.next(url);
  }
}
