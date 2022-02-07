import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-createdelivery',
  templateUrl: './createdelivery.component.html',
  styleUrls: ['./createdelivery.component.css']
})
export class CreatedeliveryComponent implements OnInit {

  eFname:string=''
  eLname:string=''
  eAddress:string=''
  eAge?:null
  eDateReg:Date=new Date
  eEmail:string=''
  eGender?:any
  eHeight?:null
  eLx?:null
  eLy?:null
  ePassword:string=''
  ePhone:string=''
  eRol_Id:number=8
  eSalary?:number
  eSkinColor?:null
  eUsername:string=''
  eWeight?:null
  selectedFile:string="";
  imagefile:File|any=null;

  CreateDelivery:FormGroup|any

  constructor(public homecreateDelivery:AdminserviceService,private fb:FormBuilder) {

    this.CreateDelivery=this.fb.group({
      Fname:new FormControl(), 
      Lname:new FormControl(), 
      Address:new FormControl(), 
      Age:new FormControl(), 
      DateReg:new FormControl(), 
      Email:new FormControl(), 
      Gender:new FormControl(), 
      Password:new FormControl(), 
      Phone:new FormControl(), 
      Rol_Id:new FormControl(), 
      Salary:new FormControl(), 
      Username:new FormControl(), 
      Height:new FormControl(), 
      Lx:new FormControl(), 
      Ly:new FormControl(), 
      SkinColor:new FormControl(), 
      Weigh:new FormControl()
   })}
  
   CreateDelivery2()
   {
   
   let object={
     Fname:this.eFname,
     Lname:this.eLname,
     Address:this.eAddress,
     Age:this.eAge,
     DateReg:this.eDateReg,
     Email:this.eEmail,
     Gender:parseInt(this.eGender),
     Password:this.ePassword,
     Phone:this.ePhone,
     Rol_Id:this.eRol_Id,
     Salary:this.eSalary,
     Username:this.eUsername,
     Height:this.eHeight,
     Lx:this.eLx,
     Ly:this.eLy,
     SkinColor:this.eSkinColor,
     Weigh:this.eWeight,
     IMAGE_PATH:this.homecreateDelivery.display_image
   }
   this.homecreateDelivery.CreateDelivery(object)
   }

   processFile(file:any)
   {
    
     let fileToUpload = <File>file[0];
     this.selectedFile=fileToUpload.name
     const formData = new FormData();
     formData.append('file', fileToUpload,fileToUpload.name);
     this.homecreateDelivery.UploadimageDelivery(formData)
     console.log(this.selectedFile)
  
   }



  ngOnInit(): void {
  }

}
