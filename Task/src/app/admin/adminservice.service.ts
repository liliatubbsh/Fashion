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
  
  allemployee:any=[{}]
  allproparty:any=[{}]
  allproduct:any=[{}]
  dataemployee:any=[{}]
  dataproparty:any=[{}]
  dataproduct:any=[{}]
  allcatrgory:any=[{}]
  datacatrgory:any=[{}]
  datacategory:any={}

  display_image:string=''
  displayimage:string=''
  constructor(private http:HttpClient,private toast:ToastrService) { }


  GetallEmployee()
  { 
    return this.http.get('https://localhost:44319/api/User/AllEmployee').subscribe((res)=>{this.allemployee=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }

  DeleteEmployee(id:number)
  {

     this.http.delete('https://localhost:44319/api/User/DeleteUser/'+id).subscribe((res)=>{this.dataemployee=res
    this.toast.success("Valid") 
      },(error:any)=>{
    
      setTimeout(() => {
        this.toast.error("invalid")
      }, 20000000000000000000000000);
    })
  }

  CreateEmployee(form:any)
{
  const headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const requestOptions = {
    headers: new HttpHeaders(headerDict),
  };
  console.log(form)
  this.http.post('https://localhost:44319/api/User/AddUser',form,requestOptions).subscribe((res)=>{console.log("good job")})

}  

UploadimageEmployee(form:FormData)
{

  const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    
    this.http.post('https://localhost:44319/api/User/uploadimage',form).subscribe((data: any) => {
    this.display_image=data.Image_Path;
    console.log(this.display_image)
    
    if(data){
    console.log(this.display_image=data.imagename);}
    })
}

GetallProduct()
  {
   return this.http.get('https://localhost:44319/api/Product/AllProduct').subscribe((res)=>{this.allproduct=res
   this.toast.success("Valid") 
    },(error:any)=>{this.toast.error("invalid")})
  }

  DeleteProduct(id:number)
  {

     this.http.delete('https://localhost:44319/api/Product/DeleteProduct/'+id).subscribe((res)=>{this.dataproduct=res
    this.toast.success("Valid") 
      },(error:any)=>{
    
      setTimeout(() => {
        this.toast.error("invalid")
      }, 20000000000000000000000000);
    })
  }

  CreateProduct(form:any)
  {
    console.log(form)
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    console.log(form)
    this.http.post('https://localhost:44319/api/Product/InsertNewProduct',form,requestOptions).subscribe((res)=>{console.log("sadda")})
  
  } 

  UploadingimageProduct(form:FormData)
  {
  
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      
      this.http.post('https://localhost:44319/api/Product/uploadimage',form).subscribe((data:any) => {
      this.display_image=data.imagE_PATH;
      console.log(this.display_image)
      
      if(data){
      console.log(this.display_image=data.imagename);}
      })
  }
  

  Getallproparty()
  {
   return this.http.get('https://localhost:44319/api/Property/GetAll').subscribe((res)=>{this.allproparty=res
   this.toast.success("Valid") 
    },(error:any)=>{this.toast.error("invalid")})
  }

  DeleteProparty(id:number)
  {

     this.http.delete('https://localhost:44319/api/Property/Delete_Property/'+id).subscribe((res)=>{this.dataproparty=res
    this.toast.success("Valid") 
      },(error:any)=>{
    
      setTimeout(() => {
        this.toast.error("invalid")
      }, 20000000000000000000000000);
    })
  }

  CreateProparty(form:any)
  {
    console.log(form)
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    console.log(form)
    this.http.post('https://localhost:44319/api/Property/NewProperty',form,requestOptions).subscribe((res)=>{console.log("sadda")})
  
  } 

  GetallCategory()
  {
    return this.http.get('https://localhost:44319/api/Category').subscribe((res)=>{this.allcatrgory=res
     this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})}
  
  DeleteCategory(id:number)
  {
  
     this.http.delete('https://localhost:44319/api/Category/'+id).subscribe((res)=>{this.datacatrgory=res
    this.toast.success("Valid") 
      },(error:any)=>{
    
      setTimeout(() => {
        this.toast.error("invalid")
      }, 20000000000000000000000000);
    })
  }
  
  CreateCategory(form:any)
  {
    console.log(form)
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    console.log(form)
    this.http.post('https://localhost:44319/api/Category',form,requestOptions).subscribe((res)=>{console.log("sadda")})
  
  } 

  UploadingimageCategory(form:FormData)
  {
  
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      
      this.http.post('https://localhost:44319/api/Category/uploadimage',form,requestOptions).subscribe((data:any) => {
      this.displayimage=data.IMAGE_PATH;
      console.log(this.display_image)
      
      if(data){
      console.log(this.display_image=data.image_Path);}
      })
  }

}
















