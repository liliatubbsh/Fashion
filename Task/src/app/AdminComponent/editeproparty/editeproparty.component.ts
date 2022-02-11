import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminserviceService } from 'src/app/admin/adminservice.service';

@Component({
  selector: 'app-editeproparty',
  templateUrl: './editeproparty.component.html',
  styleUrls: ['./editeproparty.component.css']
})
export class EditepropartyComponent implements OnInit {

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
  constructor(public homeeditpropaty:AdminserviceService,private fb:FormBuilder){   

    this.homeeditpropaty.GetallProduct();
    this.homeeditpropaty.GetallAGE();
    this.homeeditpropaty.GetallCOLOR();
    this.homeeditpropaty.GetallSKIN();
    this.homeeditpropaty.GetallSIZE(); }


  UpadteProparty2()
  {
  let object={
    quantity:parseInt(this.P_quantity),
    COLOR_ID:parseInt(this.P_COLOR_ID),
    SIZE_ID:parseInt(this.P_SIZE_ID),
    PRODUCT_ID:parseInt(this.P_PRODUCT_ID),
    SKIN_ID:parseInt(this.P_SKIN_ID),
    AGE_ID:parseInt(this.P_AGE_ID), 
    ImageProp:this.homeeditpropaty.display_image
  }
  this.homeeditpropaty.updateProparty(object)
  }
  
  processFile(file:any)
  {
   
    let fileToUpload = <File>file[0];//c://fakepath/
    this.selectedFile=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload,fileToUpload.name);
    this.homeeditpropaty.UploadingimageProparty2(formData)
    console.log(this.selectedFile)
 
  }




  ngOnInit(): void {
  }

}
