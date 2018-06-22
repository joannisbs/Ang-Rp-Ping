import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditrepComponent } from './editrep/editrep.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    EditcompanyComponent,
    EditrepComponent
  ],
  exports: [
    EditcompanyComponent
  ]
})
export class RegistrersModule { }
