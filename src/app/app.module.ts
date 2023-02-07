import { dataService } from './service';

import { NgModule } from '@angular/core';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule,  } from '@angular/platform-browser';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{MatDividerModule} from'@angular/material/divider';
import{MatButtonModule} from '@angular/material/button';
import { TopbarComponent } from './topbar/topbar.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './products/description/description.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductsComponent,
    CartComponent,
    DescriptionComponent,
    LoginComponent,
   
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
