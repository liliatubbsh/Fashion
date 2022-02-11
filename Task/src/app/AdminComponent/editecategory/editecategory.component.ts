import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-editecategory',
  templateUrl: './editecategory.component.html',
  styleUrls: ['./editecategory.component.css']
})
export class EditecategoryComponent implements OnInit {

  name:string="";
  selectedFile:string="";
  imagefile:File|any=null;
  imagename:string=''
  CreateCategory:FormGroup|any

constructor(private router:Router,private matdialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{id:number},public service:AdminserviceService,private fb:FormBuilder) {
    this.service.id=data.id
    this.service.GetCategorybyid();
    console.log(data.id)
  }

  Updatecategory2()
  {
    let object={
    id:this.data.id,
    name:this.name,
    image_Path:this.service.display_image
  }
    this.service.updateCategory(object)
    this.router.navigate(['/adminDash/category'])
    window.location.reload()
    this.matdialog.closeAll()
  }

  processFile(file:any)
  {
    let fileToUpload = <File>file[0];
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.service.UploadingimageCategory2(formData)
    console.log(this.selectedFile)
 
  }

  ngOnInit(): void {
  }

}
