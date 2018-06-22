import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepService } from './cep/cep.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CepService,
  ],
  exports: [
    CepService,
  ]
})
export class ServicesModule { }
