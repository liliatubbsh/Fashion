import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})

export class CreateCategoryComponent implements OnInit {

  Name:string="";
  selectedFile:string="";
  imagefile:File|any=null;
  imagename:string=''
  CreateCategory:FormGroup|any
  
  constructor(public homecreateCategory:AdminserviceService,private fb:FormBuilder){   
        
     this.CreateCategory=this.fb.group({
      CategoryName:new FormControl('',[Validators.required,Validators.maxLength(9)]),
      imagename:new FormControl(),    
   })}

   ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Createcategory2()
  {
  let object={
    name:this.Name,
    image_Path:this.homecreateCategory.display_image
  }
  this.homecreateCategory.CreateCategory(object)
  }

  processFile(file:any)
  {
  
    let fileToUpload = <File>file[0];//c://fakepath/
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.homecreateCategory.UploadingimageCategory(formData)
    console.log(this.selectedFile)
  }
}