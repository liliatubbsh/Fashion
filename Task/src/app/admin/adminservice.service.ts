import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import{ HttpHeaders} from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  data:any=[{}]
  allemployee:any=[{}]
  display_image:any
  constructor(private http:HttpClient,private toast:ToastrService) { }
  numofEmployee()
  {

    return this.http.get('https://localhost:44334/api/Aggregation/NumEmp').subscribe((res)=>{this.data=res
this.toast.success("Datareteive") 
  },(error:any)=>{this.toast.error("invalid")})
  }

  NumOrderDevDaily()
  {

    return this.http.get('https://localhost:44334/api/Aggregation/NumOrderDevDaily').subscribe((res)=>{this.data=res
this.toast.success("Datareteive") 
  },(error:any)=>{this.toast.error("invalid")})
  }

  NumUser()
  {

    return this.http.get('https://localhost:44334/api/Aggregation/NumUser').subscribe((res)=>{this.data=res
this.toast.success("Datareteive") 
  },(error:any)=>{this.toast.error("invalid")})
  }

  SumSales()
  {

    return this.http.get('https://localhost:44334/api/Aggregation/SumSales').subscribe((res)=>{this.data=res
this.toast.success("Datareteive") 
  },(error:any)=>{this.toast.error("invalid")})
  }


  getallemployee()
  {

    
    return this.http.get('https://localhost:44319/api/User/AllEmployee').subscribe((res)=>{this.allemployee=res
this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }

  delete(id:number)
  {

     this.http.delete('https://localhost:44334/api/Course/'+id).subscribe((res)=>{this.allemployee=res
    this.toast.success("Valid") 
      },(error:any)=>{
    
      setTimeout(() => {
        this.toast.error("invalid")
      }, 20000000000000000000000000);
    })
  }

  AddEmployee(form:FormGroup)
{
  const headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const requestOptions = {
    headers: new HttpHeaders(headerDict),
  };
  console.log(form)
  this.http.post('https://localhost:44334/api/Course',form,requestOptions).subscribe((res)=>{console.log("good job")})

}  

uploadimage(form:FormData)
{

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    
    this.http.post('https://localhost:44334/api/Course/uploadImage',form).subscribe((data: any) => {
    this.display_image=data.image;
    console.log(this.display_image)
    
    if(data){
    console.log(this.display_image=data.imagename);}
    })
}


}
