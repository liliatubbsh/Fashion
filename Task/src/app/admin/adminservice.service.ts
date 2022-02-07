import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import{ HttpHeaders} from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
import { Form } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  data:any=[{}]
  allemployee:any=[{}]
  allproparty:any=[{}]
  allproduct:any=[{}]
  dataemployee:any=[{}]
  dataproparty:any=[{}]
  dataproduct:any=[{}]
  allcatrgory:any=[{}]
  datacatrgory:any=[{}]
  dataofcategory:any={}
  dataofProduct:any={}
  dataDelivey:any=[{}]
  id?:number
  data1:any={}
  dataofEmploye:any={}
  allAGE:any=[{}]
  allSIZE:any=[{}]
  allSKIN:any=[{}]
  allCOLOR:any=[{}]
  alldelivery:any=[{}]
  display_image:any
  alldeliverybyid:any={}
  allOffer:any=[{}]
  display_image2:any
  dataofOfferd:any={}
  dataorder:any={}
  dataofOrder:any={}
  betweendate:any=[{}]
  allOrders:any=[{}]

  NumEmp:any=[{}]
  NumOrderDevDaily:any=[{}]
  NumOfUser:any=[{}]
  NumOfSales:any=[{}]
  SumOfSalaries:any=[{}]

  constructor(private http:HttpClient,private toast:ToastrService) { }


  GetallEmployee()
  { 
    return this.http.get('https://localhost:44319/api/User/AllEmployee').subscribe((res)=>{this.allemployee=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }

  GetEmployetbyid()
  {
  
  this.http.get('https://localhost:44319/api/User/AllEmployeeById/'+this.id).subscribe((result)=>{this.dataofEmploye=result})
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
 
  console.log(form)
  const headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const requestOptions = {
    headers: new HttpHeaders(headerDict),
  };
  console.log(form)
  this.http.post('https://localhost:44319/api/User/AddUser',form,requestOptions).subscribe((res)=>{console.log("sadda")

  this.toast.success("Valid") 
},(error:any)=>{this.toast.error("invalid")})


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
 
    this.http.post('https://localhost:44319/api/User/uploadimage/',form).subscribe((data:any) => {
    this.display_image=data.empImage;
    console.log(this.display_image)
    if(data){
    console.log(this.display_image=data.empImage);}
    })
}

GetallProduct()
  {
   return this.http.get('https://localhost:44319/api/Product/AllProduct').subscribe((res)=>{this.allproduct=res
   this.toast.success("Valid") 
    },(error:any)=>{this.toast.error("invalid")})
  }

  GetProductbyid()
  {
  
  this.http.get('https://localhost:44319/api/Product/AllProductById/'+this.id).subscribe((result)=>{this.dataofProduct=result})
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
    /*const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };*/
      
      this.http.post('https://localhost:44319/api/Product/uploadimage',form).subscribe((data:any) => {
      this.display_image=data.imagE_PATH;
      console.log(this.display_image)

      if(data){
      console.log(this.display_image=data.imagE_PATH);}
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
    this.http.post('https://localhost:44319/api/Property/NewProperty',form,requestOptions).subscribe((res)=>{console.log("sadda")
  
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  
  } 
/////////////////////////////////////////////////////
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
    this.http.post('https://localhost:44319/api/Category',form,requestOptions).subscribe((res)=>{console.log("sadda")
  
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})
  
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
      
      this.http.post('https://localhost:44319/api/Category/uploadimage/',form).subscribe((res:any) => {
      this.display_image=res.image_Path})
      console.log(this.display_image)
  }


  
  updateEmploye(form:any)
  {
  
    const headersDict={
      'content-type':'application/json',
      Accept:'application/json'
    };
    const requestOptions={
      headers: new HttpHeaders(headersDict),
    };
    this.http.put('https://localhost:44340/api/User/UpdateUser',form,requestOptions).subscribe((res)=>{
  
  
  console.log(true)
  
    })
  }



////////////////////////////////////////////////////////////////
updateProduct(form:any)
{

  const headersDict={
    'content-type':'application/json',
    Accept:'application/json'
  };
  const requestOptions={
    headers: new HttpHeaders(headersDict),
  };
  this.http.put('https://localhost:44340/api/monther1111std',form,requestOptions).subscribe((res)=>{


console.log(true)

  })
}
//////////////////////////////////////////////////////////////////////
updateProparty(form:any)
{

  const headersDict={
    'content-type':'application/json',
    Accept:'application/json'
  };
  const requestOptions={
    headers: new HttpHeaders(headersDict),
  };
  this.http.put('https://localhost:44340/api/monther1111std',form,requestOptions).subscribe((res)=>{


console.log(true)

  })
}
//////////////////////////////////////////////////////////////////////////

GetCategorybyid()
{

this.http.get('https://localhost:44319/api/Category/GetCategoryById/'+this.id).subscribe((result)=>{this.dataofcategory=result})
}

updateCategory(form:any)
{
  const headersDict={
    'content-type':'application/json',
    Accept:'application/json'
  };
  const requestOptions={
    headers: new HttpHeaders(headersDict),
  };
  this.http.put('https://localhost:44319/api/Category',form,requestOptions).subscribe((res)=>{
console.log(true)
  })
}

UploadingimageCategory2(form:FormData)
{
 const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict), };
    this.http.put('https://localhost:44319/api/Category/updateimage/',form).subscribe((res:any) => {
    this.display_image2=res.image_Path})
    console.log(this.display_image)  
}


////////////////////////////////////////////////////////////

GetallCOLOR()
  {
   return this.http.get('https://localhost:44319/api/ProductColor').subscribe((res)=>{this.allCOLOR=res
   this.toast.success("Valid") 
    },(error:any)=>{this.toast.error("invalid")})
  }

  GetallSKIN()
  {
   return this.http.get('https://localhost:44319/api/Skin').subscribe((res)=>{this.allSKIN=res
   this.toast.success("Valid") 
    },(error:any)=>{this.toast.error("invalid")})
  }

  GetallSIZE()
  {
   return this.http.get('https://localhost:44319/api/StandaredSize').subscribe((res)=>{this.allSIZE=res
   this.toast.success("Valid") 
    },(error:any)=>{this.toast.error("invalid")})
  }
 

  GetallAGE()
  {
   return this.http.get('https://localhost:44319/api/Age').subscribe((res)=>{this.allAGE=res
   this.toast.success("Valid") 
    },(error:any)=>{this.toast.error("invalid")})
  }

  GetallDelivery()
  { 
    return this.http.get('https://localhost:44319/api/User/AllEmployee').subscribe((res)=>{this.alldelivery=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }


  GetallDeliverybyid()
  { 
    return this.http.get('https://localhost:44319/api/Delivery/GetDeliveryById/'+this.id).subscribe((res)=>{this.alldeliverybyid=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }

  DeleteDelivey(id:number)
  {

     this.http.delete('https://localhost:44319/api/User/DeleteUser/'+id).subscribe((res)=>{this.dataDelivey=res
    this.toast.success("Valid") 
      },(error:any)=>{
    
      setTimeout(() => {
        this.toast.error("invalid")
      }, 20000000000000000000000000);
    })
  }

  CreateDelivery(form:any)
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
    this.http.post('https://localhost:44319/api/User/AddUser',form,requestOptions).subscribe((res)=>{console.log("sadda")
  
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})
  
  
  } 
  
  UploadimageDelivery(form:FormData)
  {
  
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      
      this.http.post('https://localhost:44319/api/User/uploadimage/',form).subscribe((data:any) => {
      this.display_image=data.empImage;
      console.log(this.display_image)
      if(data){
      console.log(this.display_image=data.empImage);}
      })
  }





  GetOfferedbyid()
  {
  
  this.http.get('https://localhost:44319/api/Offer/GetOfferById/'+this.id).subscribe((result)=>{this.dataofOfferd=result})
  }


  GetallOrders()
  { 
    return this.http.get('https://localhost:44319/api/Orders/DisplayOrderCompletedAdmin').subscribe((res)=>{this.allOrders=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }


  GetOrderbyid()
  {
  this.http.get('https://localhost:44319/api/Orders/DisplayDetailsOrder/'+this.id).subscribe((result)=>{this.dataofOrder=result})
  }


  DeleteOrders(id:number)
  {
  
     this.http.delete('https://localhost:44319/api/Orders/DeleteOrder/'+id).subscribe((res)=>{this.dataorder=res
    this.toast.success("Valid") 
      },(error:any)=>{
    
      setTimeout(() => {
        this.toast.error("invalid")
      }, 20000000000000000000000000);
    })
  }
  
  getbetweendate(datefrom:Date,dateto:Date)
  {
  
    console.log(datefrom,dateto)
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
  
  this.http.post('https://localhost:44319/api/Orders/DisplayOrderBetweenDateAdmin',{DateFrom:datefrom,DateTo:dateto},requestOptions).subscribe((res)=>{this.betweendate=res})
  
  console.log(this.betweendate)
  }

  NumOfEmp()
  { 
    return this.http.get('https://localhost:44319/api/Aggregation/NumEmp').subscribe((res)=>{this.NumEmp=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }
 

  NumOfAllUsers()
  { 
    return this.http.get('https://localhost:44319/api/Aggregation/NumUser').subscribe((res)=>{this.NumOfUser=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }

  NumOfAllSales()
  { 
    return this.http.get('https://localhost:44319/api/Aggregation/SumSales').subscribe((res)=>{this.NumOfSales=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }
  SumOfsallary()
  { 
    return this.http.get('https://localhost:44319/api/Aggregation/SumSalary').subscribe((res)=>{this.SumOfSalaries=res
    this.toast.success("Valid") 
  },(error:any)=>{this.toast.error("invalid")})

  }


  GetallOffered()
  {
   return this.http.get('https://localhost:44319/api/Offer').subscribe((res)=>{this.allOffer=res
   this.toast.success("Valid") 
    },(error:any)=>{this.toast.error("invalid")})
  }





}
