import { Component,ElementRef,Inject, OnInit, ViewChild } from '@angular/core';
import { AdminserviceService } from 'src/app/admin/adminservice.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditecategoryComponent } from '../editecategory/editecategory.component';


declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

 
  
  constructor(public homecategory:AdminserviceService ,private matdialog:MatDialog) {
       this.homecategory.GetallCategory();
   }

   open(id:number){

     this.matdialog.open(EditecategoryComponent,{data:{id:id}})
   }

  ngOnInit(): void {
  }

  deleteCategory(id:number)
  {
   this.homecategory.DeleteCategory(id)
   window.location.reload()
  }


  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
  }
}
