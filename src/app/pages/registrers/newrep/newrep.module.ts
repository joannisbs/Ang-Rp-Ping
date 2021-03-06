import { RepFormComponent } from '../components/rep-form/rep-form.component';
import { AddressFormComponent } from '../components/address-form/address-form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewrepComponent } from './newrep.component';
import { routing } from '../newmodule/newmodule.routing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    NewrepComponent,
    AddressFormComponent,
    RepFormComponent]
})
export class NewRepModule { }
