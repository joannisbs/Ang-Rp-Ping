import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EditcompanyComponent
  ],
  exports: [
    EditcompanyComponent
  ]
})
export class RegistrersModule { }
