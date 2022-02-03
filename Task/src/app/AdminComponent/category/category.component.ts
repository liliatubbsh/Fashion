import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public homecategory:AdminserviceService) {

       this.homecategory.GetallCategory();

   }

  ngOnInit(): void {
  }

  deleteCategory(id:number)
  {
   this.homecategory.DeleteCategory(id)
   window.location.reload()
  }


}
