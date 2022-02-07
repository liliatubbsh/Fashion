import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  productName:string="";
  productdescription:string='';
  productPrice:number=0;
  productoffeR_ID?:any;
  productcategory_Id?:any;
  productdateofadd:Date=new Date;
  selectedFile:string="";
  imagename:string=''
  imagefile:File|any=null;
  myBooks:any=[]
  selected = null;
  ListOfCat:any=[{}]
  Createproduct:FormGroup|any
  constructor(public homecreateproduct:AdminserviceService,private fb:FormBuilder,private httpService: HttpClient) { 
   
    this.Createproduct=this.fb.group({
        
      productName:new FormControl(),  
      productdescription:new FormControl(),  
      productPrice:new FormControl(),  
      productoffeR_ID:new FormControl(),  
      productcategory_Id:new FormControl(),  
      productdateofadd:new FormControl(),  
      selectedFile:new FormControl(), 
      imagename: new FormControl(),     

   })
   
   
   
    this.homecreateproduct.GetallCategory() 
   this.homecreateproduct.GetallOffered()
  }
  
CreateProduct2()
  {
    
  let object={
    Name:this.productName,
    Description:this.productdescription,
    Price:this.productPrice,
    OFFER_ID:parseInt(this.productoffeR_ID),
    Category_Id:parseInt(this.productcategory_Id),
    Dateofadd:this.productdateofadd,
    IMAGE_PATH:this.homecreateproduct.display_image
 
  }
  this.homecreateproduct.CreateProduct(object)

 
console.log(this.productcategory_Id)
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