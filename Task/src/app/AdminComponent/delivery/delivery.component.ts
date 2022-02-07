import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { EditedeliveryComponent } from '../editedelivery/editedelivery.component';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {



  
  name?:string
  P_COLOR_ID:any
  P_SIZE_ID:any
  P_PRODUCT_ID:any
  P_SKIN_ID:any
  P_AGE_ID:any
  Createproparty:FormGroup|any
  
  constructor(public homedelivery:AdminserviceService ,private matdialog:MatDialog) {
  this.homedelivery.GetallDelivery();
  this.homedelivery.GetallEmployee();
   }

   deleteDelivey(id:number)
   {
    this.homedelivery.DeleteDelivey(id);
    window.location.reload()
   }
   open(id:number){ 
     this.matdialog.open(EditedeliveryComponent,{data:{id:id}})
   }
  ngOnInit(): void {
  }

}
