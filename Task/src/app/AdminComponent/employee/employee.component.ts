import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public home:AdminserviceService,private http:HttpClient) { 

this.home.getallemployee()
  }

  deletebycomponent(id:number)
  {
   this.home. delete(id)
   window.location.reload()
  }

  ngOnInit(): void {
  }



}
