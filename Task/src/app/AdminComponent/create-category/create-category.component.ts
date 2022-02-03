import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  NAME:string="";
  selectedFile:string="";
  imagefile:File|any=null;
  constructor(public homecreateCategory:AdminserviceService) { }

  Createcategory2()
  {
  let object={
  CategoryName:this.NAME,
  propartyimagename:this.homecreateCategory.displayimage
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




  ngOnInit(): void {
  }

}
