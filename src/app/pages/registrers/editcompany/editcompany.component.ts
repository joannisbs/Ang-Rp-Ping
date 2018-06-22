import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { addressFormGroup } from '../components/address-form/address.interface';

import { CompanyService } from './../../../services/company/company.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})


export class EditcompanyComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      inputNome: ['',
                  [Validators.required,
                  Validators.maxLength(12),
                  Validators.pattern('[A-Z].*')]],

      inputCNPJ: ['',
        [Validators.required,
        Validators.maxLength(18),
        // tslint:disable-next-line:max-line-length
        Validators.pattern('^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}(-)?[0-9]{2})$|^([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}(()|(-))[0-9]{2})$')]],

      inputResp: ['',
        [Validators.required,
        Validators.maxLength(45),
        Validators.pattern('[A-Za-z ]{3,}')]],

      inputEMAIL: ['',
      [Validators.required,
      Validators.maxLength(45),
      Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]],

      inputTel: ['',
        [Validators.required,
        Validators.maxLength(14),
        Validators.pattern('[\(]?[0-9]{2}(( )|([\)])|()|(-))(([0-9]{4})|([0-9]{5}))(( )|(-)|)([0-9]{4})')]],

      inputTela: ['',
        [Validators.required,
        Validators.maxLength(1),
        Validators.pattern('[1-2]')]],

      inputColuna: ['',
        [Validators.required,
        Validators.maxLength(2),
        Validators.pattern('(10|[0-9])')]],

      inputLinha: ['',
        [Validators.required,
        Validators.maxLength(2),
        Validators.pattern('[0-9]+')]],
        ...addressFormGroup,

    });
  }

  onSubmit(company) {
   this.companyService
    .cadastrarCompany(company)
    .subscribe(res => console.log(res));
  }

}
