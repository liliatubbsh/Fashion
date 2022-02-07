import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { EditeproductComponent } from '../editeproduct/editeproduct.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public homeproduct:AdminserviceService,private matdialog:MatDialog) { 

this.homeproduct.GetallProduct();

  }

  ngOnInit(): void {
  }

  deleteProduct(id:number)
  {
   this.homeproduct.DeleteProduct(id);
   window.location.reload();
  }

  open(id:number){

    this.matdialog.open(EditeproductComponent,{data:{id:id}})
  }




}
