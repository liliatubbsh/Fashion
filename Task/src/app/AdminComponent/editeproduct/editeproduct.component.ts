import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-editeproduct',
  templateUrl: './editeproduct.component.html',
  styleUrls: ['./editeproduct.component.css']
})
export class EditeproductComponent implements OnInit {

  name:string=''
  description:string=''
  price:number=0
  imagE_PATH:string=''
  offeR_ID:any
  category_Id:any
  dateofadd?:Date
  selectedFile:string="";
  imagefile:File|any=null;



  constructor(private router:Router,private matdialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{id:number}
  ,public service:AdminserviceService,private fb:FormBuilder) { 
    this.service.id=data.id
    this.service.GetProductbyid();
    this.service.GetallProduct();
    this.service.GetallCategory();
    this.service.GetallOffered();
    console.log(data.id)

  }

  UpdateProduct2(){
    let object={
      id:this.data.id,
      name:this.name,
      description:this.description,
      price: this.price,
      imagE_PATH:this.imagefile,
      offeR_ID:this.offeR_ID,
      category_Id:this.category_Id,
      dateofadd:this.dateofadd,

    }
    this.service.updateProduct(object)

  }

  processFile(file:any)
  {
    let fileToUpload = <File>file[0];
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.service.updateProduct(formData)
    console.log(this.selectedFile)
 
  }
  ngOnInit(): void {
  }

}
