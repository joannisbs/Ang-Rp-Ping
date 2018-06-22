import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrersComponent } from './registrers.components';
import { RouterModule } from '@angular/router';
import { routing } from './registrers.routing';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { EditrepComponent } from './editrep/editrep.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';

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
    EditcompanyComponent,
    EditrepComponent,
    AddressFormComponent,
    CompanyFormComponent
   ],
   entryComponents: [
    AddressFormComponent,
    CompanyFormComponent
   ]

})
export class RegistrersModule { }
