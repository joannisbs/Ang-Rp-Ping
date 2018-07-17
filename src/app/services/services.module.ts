import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepService } from './cep/cep.service';
import { CompanyService } from './company/company.service';
import { AuthService } from './login/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    CepService,
    CompanyService,
    AuthService,
  ],
})
export class ServicesModule { }
