import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/admin/adminservice.service';


@Component({
  selector: 'app-editeproduct',
  templateUrl: './editeproduct.component.html',
  styleUrls: ['./editeproduct.component.css']
})
export class EditeproductComponent implements OnInit {

  productName:string="";
  productdescription:string='';
  productPrice?:any;
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

  constructor(public productservice:AdminserviceService,private router:Router,private matdialog:MatDialog,@Inject(MAT_DIALOG_DATA)public data:{id:number}
  ,private fb:FormBuilder) { 
   
    
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

   this.productservice.id=data.id
   this.productservice.GetProductbyid();
   this.productservice.GetallProduct();
   this.productservice.GetallCategory();
   this.productservice.GetallOffered();
   console.log(data.id)
   
  }

  UpdateProduct2(){
    let object={
      id:this.data.id,
      Name:this.productName,
      Description:this.productdescription,
      Price:parseInt(this.productPrice),
      OFFER_ID:parseInt(this.productoffeR_ID),
      Category_Id:parseInt(this.productcategory_Id),
      Dateofadd:this.productdateofadd,
      IMAGE_PATH:this.productservice.display_image
   
    }
    this.productservice.updateProduct(object)
    this.router.navigate(['/adminDash/product'])
    window.location.reload()
    this.matdialog.closeAll()

  }

  processFile(file:any)
  {
    let fileToUpload = <File>file[0];
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.productservice.UploadingimageProduct2(formData)
    console.log(this.selectedFile)
 
  }
  ngOnInit(): void {
  }

}
