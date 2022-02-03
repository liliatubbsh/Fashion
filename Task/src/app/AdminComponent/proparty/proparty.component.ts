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


   }

  ngOnInit(): void {
  }

  deleteProparty(id:number)
  {
   this.homeproparty.DeleteProparty(id);
   window.location.reload();
  }



}
