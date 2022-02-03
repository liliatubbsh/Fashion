import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public data = [
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
];
 
  title = 'angulardatatables';
  dtOptions: any = {};
 
   





  constructor(public homecategory:AdminserviceService) {

       this.homecategory.GetallCategory();

   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
  }

  deleteCategory(id:number)
  {
   this.homecategory.DeleteCategory(id)
   window.location.reload()
  }


}
