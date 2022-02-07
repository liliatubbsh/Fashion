import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminserviceService } from 'src/app/admin/adminservice.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService, public admindash:AdminserviceService,private fb:FormBuilder,private httpService: HttpClient) { 


    this.spinner.show()

   
    setTimeout(()=>{
      this.spinner.hide();
    },2000);


    this.admindash.NumOfEmp()
    this.admindash.NumOfAllSales()
    this.admindash.NumOfAllUsers()
    this.admindash.SumOfsallary()


  }

  ngOnInit(): void {
  }

}
