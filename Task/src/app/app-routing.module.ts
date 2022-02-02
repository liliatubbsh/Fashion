import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './auth-user.guard';



const routes: Routes = [{path :'',loadChildren:()=>(import('./Module/homemodule/homemodule.module').then((x)=>x.HomemoduleModule))},
{path :'adminDash',loadChildren:()=>(import('./adminmodule/admin/admin.module').then((x)=>x.AdminModule))},
{path :'User',loadChildren:()=>(import('./usermodule/user/user.module').then((x)=>x.UserModule)),canActivate:[AuthUserGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
