import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addressFormGroup } from '../components/address-form/address.interface';

@Component({
  selector: 'app-editrep',
  templateUrl: './editrep.component.html',
  styleUrls: ['./editrep.component.css']
})


export class EditrepComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      inputNome: [null,
                  [Validators.required,
                  Validators.maxLength(12),
                  Validators.pattern('[A-Z].*')]],

      inputCNPJ: [null,
        [Validators.required,
        Validators.maxLength(18),
        // tslint:disable-next-line:max-line-length
        Validators.pattern('^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}(-)?[0-9]{2})$|^([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}(()|(-))[0-9]{2})$')]],

      inputResp: [null,
        [Validators.required,
        Validators.maxLength(45),
        Validators.pattern('[A-Za-z ]{3,}')]],

      inputEMAIL: [null,
      [Validators.required,
      Validators.maxLength(45),
      Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]],

      inputTel: [null,
        [Validators.required,
        Validators.maxLength(14),
        Validators.pattern('[\(]?[0-9]{2}(( )|([\)])|()|(-))(([0-9]{4})|([0-9]{5}))(( )|(-)|)([0-9]{4})')]],

      inputTela: [null,
        [Validators.required,
        Validators.maxLength(1),
        Validators.pattern('[1-2]')]],

      inputColuna: [null,
        [Validators.required,
        Validators.maxLength(2),
        Validators.pattern('(10|[0-9])')]],

      inputLinha: [null,
        [Validators.required,
        Validators.maxLength(2),
        Validators.pattern('[0-9]+')]],
        ...addressFormGroup
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
  }
}
