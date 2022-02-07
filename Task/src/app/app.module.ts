import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { LoginComponent } from './logincomponent/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './UserDashboard/user/user.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { OrderAdminComponent } from './AdminComponent/order-admin/order-admin.component';
import { ToastRef, ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { EmployeeComponent } from './AdminComponent/employee/employee.component';
import { SidebarComponent } from './AdminComponent/sidebar/sidebar.component';
import { FooterComponent } from './Homecomponent/footer/footer.component';
import { NavbarComponent } from './Homecomponent/navbar/navbar.component';
import { HomepageComponent } from './Homecomponent/homepage/homepage.component';
import { ContactComponent } from './Homecomponent/contact/contact.component';
import { AllpropartyComponent } from './Homecomponent/allproparty/allproparty.component';
import { AboutComponent } from './Homecomponent/about/about.component';
import { CategoryComponent } from './AdminComponent/category/category.component';
import { CreateCategoryComponent } from './AdminComponent/create-category/create-category.component';
import { PropartyComponent } from './AdminComponent/proparty/proparty.component';
import { CreatepropartyComponent } from './AdminComponent/createproparty/createproparty.component';
import { CreateEmployeeComponent } from './AdminComponent/create-employee/create-employee.component';
import { ProductComponent } from './AdminComponent/product/product.component';
import { CreateproductComponent } from './AdminComponent/createproduct/createproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AddEmolyeeComponent } from './AdminComponent/admin/add-emolyee/add-emolyee.component';
import{MatDialogModule} from'@angular/material/dialog';
import { EditecategoryComponent } from './AdminComponent/editecategory/editecategory.component';
import { EditeemployeeComponent } from './AdminComponent/editeemployee/editeemployee.component';
import { EditeproductComponent } from './AdminComponent/editeproduct/editeproduct.component';
import { DeliveryComponent } from './AdminComponent/delivery/delivery.component';
import { EditedeliveryComponent } from './AdminComponent/editedelivery/editedelivery.component';
import { CreatedeliveryComponent } from './AdminComponent/createdelivery/createdelivery.component';
import { EditeOrderComponent } from './AdminComponent/edite-order/edite-order.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UserIndexComponent,
    OrderAdminComponent,
    RegisterComponentComponent,
    EmployeeComponent,
    SidebarComponent,
    HomepageComponent,
    ContactComponent,
    AllpropartyComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    CategoryComponent,
    CreateCategoryComponent,
    CategoryComponent,
    PropartyComponent,
    CreatepropartyComponent,
    CreateEmployeeComponent,
    ProductComponent,
    CreateproductComponent,
    EditecategoryComponent,
    EditeemployeeComponent,
    EditeproductComponent,
    DeliveryComponent,
    EditedeliveryComponent,
    CreatedeliveryComponent,
    EditeOrderComponent,
   
    
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     FormsModule,HttpClientModule,
     ToastrModule.forRoot({progressBar:true,timeOut:2000}),
     NgbModule,
     BrowserAnimationsModule,
     MatDialogModule,
     NgxSpinnerModule,
     MatProgressSpinnerModule,
  
    ReactiveFormsModule,
 


  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
