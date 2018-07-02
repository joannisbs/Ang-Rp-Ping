import { Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { arrumaCNPJouCpf } from './../../../../generic/funcoes-genericas/arrumaCPFouCNPJ.function';
import { arrumaTelefone } from './../../../../generic/funcoes-genericas/arrumaTel.function';

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
  arrumaTel(value , campo) {
    const res = arrumaTelefone(value);
    this.companyForm.get(campo).patchValue(res);
  }

}
