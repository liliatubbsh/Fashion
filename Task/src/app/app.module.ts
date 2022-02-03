import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
//import { AddEmolyeeComponent } from './AdminComponent/admin/add-emolyee/add-emolyee.component';


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
    CreateproductComponent
    
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     ReactiveFormsModule,FormsModule,HttpClientModule,
     ToastrModule.forRoot({progressBar:true,timeOut:2000})
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
