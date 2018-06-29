import { Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {


  @Input()
  companyForm;

  @Input()
  ocorreuSubmit;

  constructor() { }

  ngOnInit() { }

  showErrors(value) {
    return this.companyForm.controls[ value ].valid || !(this.companyForm.controls[ value].touched || this.ocorreuSubmit);
  }
  arrumaCNPJ(cpf_cnpj) {
    cpf_cnpj = cpf_cnpj.replace(/\./g , '');
    cpf_cnpj = cpf_cnpj.replace('\-', '');
    cpf_cnpj = cpf_cnpj.replace('\/', '');
    console.log(cpf_cnpj);
    if (cpf_cnpj.length === 11) {
      let cpf = cpf_cnpj.substring(0, 3);
      cpf = cpf + '.';
      cpf = cpf + cpf_cnpj.substring(3, 6);
      cpf = cpf + '.';
      cpf = cpf + cpf_cnpj.substring(6, 9);
      cpf = cpf + '-';
      cpf = cpf + cpf_cnpj.substring(9, 11);
      this.companyForm.get('empdata_cnpj').patchValue(cpf);
    }
    if (cpf_cnpj.length === 14) {
      let cnpj = cpf_cnpj.substring(0, 2);
      cnpj = cnpj + '.';
      cnpj = cnpj + cpf_cnpj.substring(2, 5);
      cnpj = cnpj + '.';
      cnpj = cnpj + cpf_cnpj.substring(5, 8);
      cnpj = cnpj + '/';
      cnpj = cnpj + cpf_cnpj.substring(8, 12);
      cnpj = cnpj + '-';
      cnpj = cnpj + cpf_cnpj.substring(12, 14);
      this.companyForm.get('empdata_cnpj').patchValue(cnpj);
    }
  }
  arrumaTel(tel) {
    tel = tel.replace(/\(/g, '');
    tel = tel.replace(/\)/g, '');
    tel = tel.replace(/-/g, '');
    tel = tel.replace(/ /g, '');

    if (tel.length === 10) {
      let fixo = '(';
      fixo = fixo + tel.substring(0, 2);
      fixo = fixo + ')';
      fixo = fixo + tel.substring(2, 6);
      fixo = fixo + '-';
      fixo = fixo + tel.substring(6, 10);
      this.companyForm.get('empdata_tel').patchValue(fixo);
    }
    if (tel.length === 11) {
      let cel = '(';
      cel = cel + tel.substring(0, 2);
      cel = cel + ')';
      cel = cel + tel.substring(2, 7);
      cel = cel + '-';
      cel = cel + tel.substring(7, 11);
      this.companyForm.get('empdata_tel').patchValue(cel);
    }
  }

}
