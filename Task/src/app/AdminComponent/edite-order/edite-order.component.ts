import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-edite-order',
  templateUrl: './edite-order.component.html',
  styleUrls: ['./edite-order.component.css']
})
export class EditeOrderComponent implements OnInit {

  CustomerName?:string
  phoneNumber?:string
  address?:string
  TotalPrice?:number
  Date:Date=new Date;

  constructor(private router:Router,private matdialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{id:number},public service:AdminserviceService,private fb:FormBuilder) { 

    this.service.id=data.id
    this.service.GetOrderbyid();
    console.log(data.id)   

  }

  close(){

    this.router.navigate(['/adminDash/order'])
    window.location.reload()
    this.matdialog.closeAll()



  }

  ngOnInit(): void {
  }

}
