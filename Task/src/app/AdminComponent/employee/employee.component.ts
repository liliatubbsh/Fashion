import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public homeEmployee:AdminserviceService) { 

       this.homeEmployee.GetallEmployee();
  }

  deleteEmployee(id:number)
  {
   this.homeEmployee.DeleteEmployee(id);
   window.location.reload()
  }


  ngOnInit(): void {
  }



}
