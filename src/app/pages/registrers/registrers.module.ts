import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegistrersComponent } from './registrers.components';
import { routing } from './registrers.routing';

import { AddressFormComponent } from './components/address-form/address-form.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { EquipFormComponent } from './components/equip-form/equip-form.component';
import { RepFormComponent } from './components/rep-form/rep-form.component';

import { EditclientesComponent } from './editclientes/editclientes.component';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { EditrepComponent } from './editrep/editrep.component';
import { EdituserComponent } from './edituser/edituser.component';

import { NewclientesComponent } from './newclientes/newclientes.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { NewequipComponent } from './newequip/newequip.component';
import { NewrepComponent } from './newrep/newrep.component';
import { UserComumFormComponent } from './components/user-comum-form/user-comum-form.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ModuleFormComponent } from './components/module-form/module-form.component';
import { NewmoduleComponent } from './newmodule/newmodule.component';
import { ChipFormComponent } from './components/chip-form/chip-form.component';


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
    NewequipComponent,
    EdituserComponent,
    EditclientesComponent,
    NewclientesComponent,
    NewcompanyComponent,
    NewrepComponent,
    EquipFormComponent,
    UserComumFormComponent,
    NewuserComponent,
    ModuleFormComponent,
    NewmoduleComponent,
    ChipFormComponent
   ],
   entryComponents: [
    AddressFormComponent,
    CompanyFormComponent,
    RepFormComponent
  ]

})
export class RegistrersModule { }
