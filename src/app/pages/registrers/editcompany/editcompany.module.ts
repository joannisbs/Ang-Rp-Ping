

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './editcompany.routing';
import { CompanyFormComponent } from 'src/app/pages/registrers/components/company-form/company-form.component';
import { AddressFormComponent } from 'src/app/pages/registrers/components/address-form/address-form.component';
import { EditcompanyComponent } from 'src/app/pages/registrers/editcompany/editcompany.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing,
  ],
  declarations: [
    EditcompanyComponent,
    
  ],
  entryComponents:[
    // CompanyFormComponent
  ]
})
export class EditCompanyModule { }
