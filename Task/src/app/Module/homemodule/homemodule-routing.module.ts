import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/Homecomponent/about/about.component';
import { AllpropartyComponent } from 'src/app/Homecomponent/allproparty/allproparty.component';
import { ContactComponent } from 'src/app/Homecomponent/contact/contact.component';
import { HomepageComponent } from 'src/app/Homecomponent/homepage/homepage.component';
import { LoginComponent } from 'src/app/logincomponent/login/login.component';
import { RegisterComponentComponent } from 'src/app/register-component/register-component.component';

const routes: Routes = [
{path :'',component:HomepageComponent}
,{path :'about',component:AboutComponent}
,{path :'contact',component:ContactComponent}
,{path :'login',component:LoginComponent}
,{path :'register',component:RegisterComponentComponent}
,{path :'product',component:AllpropartyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
