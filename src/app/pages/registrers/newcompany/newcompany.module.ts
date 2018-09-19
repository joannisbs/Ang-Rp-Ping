import { NewcompanyComponent } from './newcompany.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './newcompany.routing';
import { CompanyFormComponent } from 'src/app/pages/registrers/components/company-form/company-form.component';
import { AddressFormComponent } from 'src/app/pages/registrers/components/address-form/address-form.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing,
  ],
  declarations: [
    NewcompanyComponent,
    CompanyFormComponent, 
    AddressFormComponent
  ],
  entryComponents:[
    // CompanyFormComponent
  ]
})
export class NewCompanyModule { }
