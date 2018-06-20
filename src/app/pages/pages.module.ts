import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrersModule } from './registrers/registrers.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    RegistrersModule
  ],
  exports: [
    RegistrersModule
  ]
})
export class PagesModule { }
