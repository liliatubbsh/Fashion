import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-proparty',
  templateUrl: './proparty.component.html',
  styleUrls: ['./proparty.component.css']
})
export class PropartyComponent implements OnInit {

  constructor(public homeproparty:AdminserviceService) {

     this.homeproparty.Getallproparty();
     this.homeproparty.GetallProduct();
     this.homeproparty.GetallCategory();
     this.homeproparty.GetallOffered();
     this.homeproparty.GetallAGE();
     this.homeproparty.GetallCOLOR();
     this.homeproparty.GetallSKIN();
     this.homeproparty.GetallSIZE();
     this.homeproparty.GetallSIZEbyid();

   }

  ngOnInit(): void {
  }

  deleteProparty(id:number)
  {
   this.homeproparty.DeleteProparty(id);
   window.location.reload();
  }

  deletecolor(id:number)
  {
   this.homeproparty.Deletecolor(id);
   window.location.reload();
  }

  deleteSkin(id:number)
  {
   this.homeproparty.Deletecolorskin(id);
   window.location.reload();
  }

}
