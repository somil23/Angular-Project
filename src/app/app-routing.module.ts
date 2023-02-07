import { LoginComponent } from './login/login.component';
import { DescriptionComponent } from './products/description/description.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Logged1Guard } from './logged/logged1.guard';


const routes: Routes = [
  {path:'',component:ProductsComponent,canActivate:[Logged1Guard]},
  {path:'cart',component:CartComponent,canActivate:[Logged1Guard]},
  {path:'description',component:DescriptionComponent,canActivate:[Logged1Guard]},
  {path:'login',component:LoginComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
