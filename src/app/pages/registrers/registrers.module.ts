// imports angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// imports componets
import { RegistrersComponent } from './registrers.components';

// imports rotas
import { routing } from './registrers.routing';
import { CompanyFormComponent } from 'src/app/pages/registrers/components/company-form/company-form.component';


@NgModule({

  imports: 
  [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    
    RouterModule,
    routing
  ],

  declarations: 
  [
    RegistrersComponent,
    
  ]

})
export class RegistrersModule { }
