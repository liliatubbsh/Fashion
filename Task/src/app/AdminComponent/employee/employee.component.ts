import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { EditeemployeeComponent } from '../editeemployee/editeemployee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public homeEmployee:AdminserviceService,private matdialog:MatDialog) { 

       this.homeEmployee.GetallEmployee();
  }

  deleteEmployee(id:number)
  {
   this.homeEmployee.DeleteEmployee(id);
   window.location.reload()
  }
  open(id:number){

    this.matdialog.open(EditeemployeeComponent,{data:{id:id}})
  }

  ngOnInit(): void {
  }
}
