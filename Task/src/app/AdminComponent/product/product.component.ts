import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public homeproduct:AdminserviceService) { 

this.homeproduct.GetallProduct();

  }

  ngOnInit(): void {
  }

  deleteProduct(id:number)
  {
   this.homeproduct.DeleteProduct(id);
   window.location.reload();
  }


}
