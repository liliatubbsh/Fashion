import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-editeemployee',
  templateUrl: './editeemployee.component.html',
  styleUrls: ['./editeemployee.component.css']
})
export class EditeemployeeComponent implements OnInit {

  
  Name:string='';
    email:string='';
    phone: string='';
    address:string='';
    empImage: string='';
    salary: number=0;
    gender:number=0;

  constructor(private router:Router,private matdialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{id:number}
  ,public service:AdminserviceService,private fb:FormBuilder) {
        
    this.service.id=data.id
    this.service.GetEmployetbyid();
    console.log(data.id)
  }

  Updateemployee2(){

    let object={
      id:this.data.id,
      Name:this.Name,
      email:this.email,
      phone: this.phone,
      address:this.address,
      empImage:this.empImage,
      salary:this.salary,
      gender:this.gender,
    }
    this.service.updateEmploye(object)

  }

  processFile(){}

  ngOnInit(): void {
  }

}
