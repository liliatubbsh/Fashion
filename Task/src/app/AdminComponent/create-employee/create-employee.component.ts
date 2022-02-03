import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  Fname:string=''
  Lname:string=''
  Address:string=''
  Age:string=''
  DateReg:Date=new Date
  Email: string=''
  Gender?:number
  Height?: null
  Lx?: null
  Ly?: null
  Password: string=''
  Phone: string=''
  Rol_Id:number=6
  Salary:string=''
  SkinColor?: null
  Username:string=''
  Weight?: null

  selectedFile:string="";
  imagefile:File|any=null;

  constructor(public homecreateEmployee:AdminserviceService) { }

  CreateEmployee2()
  {
  let object={
    EmployeeFname:this.Fname,
    EmployeeLname:this.Lname,
    EmployeeAddress:this.Address,
    EmployeeAge:this.Age,
    EmployeeDateReg:this.DateReg,
    EmployeeEmail:this.Email,
    EmployeeGender:this.Gender,
    EmployeeHeight:this.Height,
    EmployeeLx:this.Lx,
    EmployeeLy:this.Ly,
    EmployeePassword:this.Password,
    EmployeePhone:this.Phone,
    EmployeeRol_Id:this.Rol_Id,
    EmployeeSalary:this.Salary,
    EmployeeSkinColor:this.SkinColor,
    EmployeeUsername:this.Username,
    EmployeeWeight:this.Weight,
    Employeeimagename:this.homecreateEmployee.display_image
  }
  this.homecreateEmployee.CreateEmployee(object)
  }

  processFile(file:any)
  {
   
    let fileToUpload = <File>file[0];//c://fakepath/
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.homecreateEmployee.UploadimageEmployee(formData)
    console.log(this.selectedFile)
 
  }
  ngOnInit(): void {
  }

}
