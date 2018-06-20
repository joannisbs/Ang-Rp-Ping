import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EditcompanyComponent
  ],
  exports: [
    EditcompanyComponent
  ]
})
export class RegistrersModule { }
