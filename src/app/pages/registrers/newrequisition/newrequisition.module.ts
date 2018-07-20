import { ReqFormComponent } from './../components/req-form/req-form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './newrequisition.routing';
import { NewrequisitionComponent } from './newrequisition.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    NewrequisitionComponent,
    ReqFormComponent]
})
export class NewRequisitionModule { }
