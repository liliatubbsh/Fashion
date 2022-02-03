import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-createproparty',
  templateUrl: './createproparty.component.html',
  styleUrls: ['./createproparty.component.css']
})
export class CreatepropartyComponent implements OnInit {


  quantity:string='';
  COLOR_ID:number=0;
  SIZE_ID:number=0;
  PRODUCT_ID:number=0;
  SKIN_ID:number=0;
  AGE_ID:number=0;

  constructor(public homecreatepropaty:AdminserviceService) { }
  CreateProparty2()
  {
  
  let object={
  propartyquantity:this.quantity,
  propartyCOLOR_ID:this.COLOR_ID,
  propartySIZE_ID:this.SIZE_ID,
  propartyPRODUCT_ID:this.PRODUCT_ID,
  propartySKIN_ID:this.SKIN_ID,
  propartyAGE_ID:this.AGE_ID, 
  }
  this.homecreatepropaty.CreateProparty(object)
  }





  ngOnInit(): void {
  }

}
