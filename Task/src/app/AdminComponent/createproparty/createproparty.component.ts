import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-createproparty',
  templateUrl: './createproparty.component.html',
  styleUrls: ['./createproparty.component.css']
})
export class CreatepropartyComponent implements OnInit {
  P_quantity?:any
  P_COLOR_ID:any
  P_SIZE_ID:any
  P_PRODUCT_ID:any
  P_SKIN_ID:any
  P_AGE_ID:any
  ImageProp:any=null
  Color_Of_Product:string=''
  SkinColor:string=''
  Createproparty:FormGroup|any
  selectedFile:string="";
  imagefile:File|any=null;
  constructor(public homecreatepropaty:AdminserviceService,private fb:FormBuilder){   

    this.homecreatepropaty.GetallProduct();
    this.homecreatepropaty.GetallAGE();
    this.homecreatepropaty.GetallCOLOR();
    this.homecreatepropaty.GetallSKIN();
    this.homecreatepropaty.GetallSIZE();
        
    this.Createproparty=this.fb.group({
      P_quantity:new FormControl(),
      P_COLOR_ID:new FormControl(),
      P_SIZE_ID:new FormControl(),
      P_PRODUCT_ID:new FormControl(),
      P_SKIN_ID:new FormControl(),
      P_AGE_ID:new FormControl(),
  })
  }
  CreateProparty2()
  {
  let object={
    quantity:parseInt(this.P_quantity),
    COLOR_ID:parseInt(this.P_COLOR_ID),
    SIZE_ID:parseInt(this.P_SIZE_ID),
    PRODUCT_ID:parseInt(this.P_PRODUCT_ID),
    SKIN_ID:parseInt(this.P_SKIN_ID),
    AGE_ID:parseInt(this.P_AGE_ID), 
    ImageProp:this.homecreatepropaty.display_image
  }
  this.homecreatepropaty.CreateProparty(object)
  }
  processFile(file:any)
  {
   
    let fileToUpload = <File>file[0];//c://fakepath/
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.homecreatepropaty.UploadingimageProparty(formData)
    console.log(this.selectedFile)
 
  }




  Createcolor2()
  {  
  let object={  
    COLOR_PRODUCT:this.Color_Of_Product
  }
  this.homecreatepropaty.CreateCOLOR(object)
  }


  CreateSkin2()
  {  
  let object={  
    Color_Skin:this.SkinColor
  }
  this.homecreatepropaty.CreateSkin(object)
  }



  ngOnInit(): void {
  }

}
