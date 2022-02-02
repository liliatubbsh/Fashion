import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from 'src/app/AdminComponent/category/category.component';
import { CreateCategoryComponent } from 'src/app/AdminComponent/create-category/create-category.component';
import { CreateEmployeeComponent } from 'src/app/AdminComponent/create-employee/create-employee.component';
import { CreateproductComponent } from 'src/app/AdminComponent/createproduct/createproduct.component';
import { CreatepropartyComponent } from 'src/app/AdminComponent/createproparty/createproparty.component';
import { EmployeeComponent } from 'src/app/AdminComponent/employee/employee.component';
import { ProductComponent } from 'src/app/AdminComponent/product/product.component';
import { PropartyComponent } from 'src/app/AdminComponent/proparty/proparty.component';


const routes: Routes = [
{path :'employee',component:EmployeeComponent},
{path :'category',component:CategoryComponent},
{path :'createCategory',component:CreateCategoryComponent},
{path :'proparty',component:PropartyComponent},
{path :'createproparty',component:CreatepropartyComponent},
{path :'createEmployee',component:CreateEmployeeComponent},
{path :'product',component:ProductComponent},
{path :'createproduct ',component:CreateproductComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
