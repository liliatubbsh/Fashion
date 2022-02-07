import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-editedelivery',
  templateUrl: './editedelivery.component.html',
  styleUrls: ['./editedelivery.component.css']
})
export class EditedeliveryComponent implements OnInit {


 
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

  constructor(private router:Router,private matdialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{id:number},public service:AdminserviceService,private fb:FormBuilder) {

    this.service.id=data.id
    this.service.GetEmployetbyid();
    console.log(data.id)
  


   }

  ngOnInit(): void {
  }

}
