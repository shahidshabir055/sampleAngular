import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private backend: BackendService, private subject: SubjectsService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  urlString: any;
  data={}
  dataFromServer: any;
  onSubmit(){
    this.backend.fetch_data(this.data).subscribe((event:HttpEvent<any>)=>{
      switch(event.type){
          case(HttpEventType.Sent):
            //this.sppiner.show()
            break;
          case(HttpEventType.Response):
            //this.spinner.hide()
            this.subject.sendUrl(this.urlString)
            this.dataFromServer = event.body;
           // this.toastr.success("success")
           break;
      }
    },
    (err:HttpErrorResponse)=>{
       // this.spinner.hide()
       //this.toastr.error()
    }
    )
  }

}
