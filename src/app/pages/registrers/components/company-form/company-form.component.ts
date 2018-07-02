import { Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { arrumaCNPJouCpf } from './../../../../generic/funcoes-genericas/arrumaCPFouCNPJ.function';

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
 arrumaCNPJ(value, campo) {
    const res = arrumaCNPJouCpf(value);
    this.companyForm.get(campo).patchValue(res);
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
