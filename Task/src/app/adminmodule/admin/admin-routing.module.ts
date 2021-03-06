import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/AdminComponent/admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from 'src/app/AdminComponent/category/category.component';
import { CreateCategoryComponent } from 'src/app/AdminComponent/create-category/create-category.component';
import { CreateEmployeeComponent } from 'src/app/AdminComponent/create-employee/create-employee.component';
import { CreatedeliveryComponent } from 'src/app/AdminComponent/createdelivery/createdelivery.component';
import { CreateproductComponent } from 'src/app/AdminComponent/createproduct/createproduct.component';
import { CreatepropartyComponent } from 'src/app/AdminComponent/createproparty/createproparty.component';
import { CustomerComponent } from 'src/app/AdminComponent/customer/customer.component';
import { DeliveryComponent } from 'src/app/AdminComponent/delivery/delivery.component';
import { EditeOrderComponent } from 'src/app/AdminComponent/edite-order/edite-order.component';
import { EditecategoryComponent } from 'src/app/AdminComponent/editecategory/editecategory.component';
import { EditecustomerComponent } from 'src/app/AdminComponent/editecustomer/editecustomer.component';
import { EditedeliveryComponent } from 'src/app/AdminComponent/editedelivery/editedelivery.component';
import { EditeemployeeComponent } from 'src/app/AdminComponent/editeemployee/editeemployee.component';
import { EditepropartyComponent } from 'src/app/AdminComponent/editeproparty/editeproparty.component';
import { EmployeeComponent } from 'src/app/AdminComponent/employee/employee.component';
import { OrderAdminComponent } from 'src/app/AdminComponent/order-admin/order-admin.component';
import { ProductComponent } from 'src/app/AdminComponent/product/product.component';
import { PropartyComponent } from 'src/app/AdminComponent/proparty/proparty.component';
import { SidebarComponent } from 'src/app/AdminComponent/sidebar/sidebar.component';


const routes: Routes = [
  
{path :'employee',component:EmployeeComponent},
{path :'category',component:CategoryComponent},
{path :'createCategory',component:CreateCategoryComponent},
{path :'proparty',component:PropartyComponent},
{path :'createproparty',component:CreatepropartyComponent},
{path :'createEmployee',component:CreateEmployeeComponent},
{path :'product',component:ProductComponent},
{path :'createproduct',component:CreateproductComponent},
{path :'order',component:OrderAdminComponent},
{path :'sidebar',component:SidebarComponent},
{path :'Editecategory ',component:EditecategoryComponent},
{path :'EditeEmployee ',component:EditeemployeeComponent},
{path :'editeproduct ',component:EditecategoryComponent},
{path :'delivery',component:DeliveryComponent},
{path :'editedelivery',component:EditedeliveryComponent},
{path :'createdelivery',component:CreatedeliveryComponent},
{path :'EditeOrder',component:EditeOrderComponent},
{path :'admin',component:AdminDashboardComponent},
{path :'editeproparty',component:EditepropartyComponent},
{path :'customer',component:CustomerComponent},
{path :'admin',component:EditecustomerComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
