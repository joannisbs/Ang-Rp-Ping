// imports angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//imports componets
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

//import rota
import { routing } from './pages.routing';


@NgModule({

  imports: 
  [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule,
    routing
  ],

  declarations: 
  [
    LoginComponent,
    PagesComponent 
  ],

})
export class PagesModule { }
