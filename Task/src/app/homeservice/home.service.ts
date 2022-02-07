import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  data:any=[{}]
  
  constructor(private httpclient:HttpClient) { }

  getallProparty()
  {
    
    const headersDict={   
      'content-type':'application/json',
      Accept:'application/json'
    };
    const requestOptions={
      headers: new HttpHeaders(headersDict),
    };

    return this.httpclient.get('https://localhost:44319/api/Property/GetAll',requestOptions).subscribe((res)=>{this.data=res
    })

  }




}
