import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-editeemployee',
  templateUrl: './editeemployee.component.html',
  styleUrls: ['./editeemployee.component.css']
})
export class EditeemployeeComponent implements OnInit {
 
  eFname:string=''
  eLname:string=''
  eAddress:string=''
  eAge?:null
  eDateReg:Date=new Date;
  eEmail:string=''
  eGender?:any
  eHeight?:null
  eLx?:null
  eLy?:null
  ePassword:string=''
  ePhone:string=''
  eRol_Id?:any
  eSalary?:any
  eSkinColor?:null
  eUsername:string=''
  eWeight?:null
  selectedFile:string="";
  imagefile:File|any=null;

  CreateEmployee:FormGroup|any
  constructor(private router:Router,private matdialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{id:number}
  ,public service:AdminserviceService,private fb:FormBuilder) {
       
    this.service.id=data.id
    this.service.GetEmployetbyid();
    console.log(data.id)
  }

  Updateemployee2(){

    let object={
      Id:this.data.id,
      Fname:this.eFname,
      Lname:this.eLname,
      Address:this.eAddress,
      Age:this.eAge,
      DateReg:this.eDateReg,
      Email:this.eEmail,
      Gender:parseInt(this.eGender),
      Password:this.ePassword,
      Phone:this.ePhone,
      Rol_Id:parseInt(this.eRol_Id),
      Salary:parseInt(this.eSalary),
      Username:this.eUsername,
      Height:this.eHeight,
      Lx:this.eLx,
      Ly:this.eLy,
      SkinColor:this.eSkinColor,
       Weight:this.eWeight,
       IMAGE_PATH:this.service.display_image
    }

    this.service.updateEmploye(object)
    //this.router.navigate(['/adminDash/employee'])
    //window.location.reload()
    this.matdialog.closeAll()
  }

  processFile(file:any){

    let fileToUpload = <File>file[0];
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.service.UploadingimageEmploee2(formData)
    console.log(this.selectedFile)
 
  }

  ngOnInit(): void {
  }

}
