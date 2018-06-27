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
import { RepFormComponent } from './components/rep-form/rep-form.component';
import { CreateequipComponent } from './createequip/createequip.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditclientesComponent } from './editclientes/editclientes.component';

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
    CompanyFormComponent,
    RepFormComponent,
    CreateequipComponent,
    EdituserComponent,
    EditclientesComponent
   ],
   entryComponents: [
    AddressFormComponent,
    CompanyFormComponent,
    RepFormComponent
  ]

})
export class RegistrersModule { }
