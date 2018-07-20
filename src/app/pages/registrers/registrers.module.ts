import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegistrersComponent } from './registrers.components';
import { routing } from './registrers.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    routing

  ],
  declarations: [
    RegistrersComponent,
   
   ],
   entryComponents: [
  ]

})
export class RegistrersModule { }
