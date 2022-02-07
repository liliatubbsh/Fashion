import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { EditeOrderComponent } from '../edite-order/edite-order.component';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  DateFrom:Date=new Date;
  DateTo:Date=new Date;


  constructor(public homeOrder:AdminserviceService,private matdialog:MatDialog) {

   this.homeOrder.getbetweendate(this.DateFrom,this.DateTo)

   this.homeOrder.GetallOrders();
   }
   deleteOrder(id:number)
   {
    this.homeOrder.DeleteOrders(id);
    window.location.reload()
   
}
   open(id:number){
    this.matdialog.open(EditeOrderComponent,{data:{id:id}})
   }

  ngOnInit(): void {
  }

}
