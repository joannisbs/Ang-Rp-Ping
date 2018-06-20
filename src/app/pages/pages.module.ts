import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrersModule } from './registrers/registrers.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RegistrersModule
  ],
  exports: [
    RegistrersModule
  ]
})
export class PagesModule { }
