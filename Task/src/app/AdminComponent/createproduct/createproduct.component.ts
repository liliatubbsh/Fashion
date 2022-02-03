import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {


  name:string="";
  description: string='';
  price:number=0;
  offeR_ID?:number;
  category_Id?:number;
  dateofadd:Date=new Date;
 
  selectedFile:string="";
  imagefile:File|any=null;
  constructor(public homecreateproduct:AdminserviceService) { 
  }
  CreateProduct2()
  {
  let object={
  productName:this.name,
  productPrice:this.price,
  productdescription:this.description,
  productoffeR_ID:this.offeR_ID,
  productcategory_Id:this.category_Id,
  productdateofadd:this.dateofadd,
  propartyimagename:this.homecreateproduct.display_image
  }
  this.homecreateproduct.CreateProduct(object)
  }

  processFile(file:any)
  {
   
    let fileToUpload = <File>file[0];//c://fakepath/
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.homecreateproduct.UploadingimageProduct(formData)
    console.log(this.selectedFile)
 
  }


  ngOnInit(): void {
  }

}
