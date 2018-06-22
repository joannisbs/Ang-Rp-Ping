import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';


@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})


export class EditcompanyComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: Http) { }

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


      inputCep: [null,
        [Validators.required,
        Validators.maxLength(45),
        Validators.pattern('[0-9]{5}[-][0-9]{3}')]],

      inputRua: [null,
        [Validators.required,
        Validators.maxLength(60),
        Validators.pattern('[A-Za-z]{3,}')]],

      inputNum: [null,
        [Validators.required,
        Validators.maxLength(6),
        Validators.pattern('[0-9]+')]],

      inputComp: [null,
        [Validators.maxLength(45)]],

      inputUF: [null,
        [Validators.required,
        Validators.maxLength(2),
        Validators.pattern('[A-Z]+')]],

      inputCity: [null,
        [Validators.required,
        Validators.maxLength(45)]],

      inputBairro: [null,
        [Validators.required,
        Validators.maxLength(45)]],

      inputRef: [null,
        [Validators.required,
        Validators.maxLength(45)]],

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
    });
  }
  onSubmit() {
    console.log(this.formulario.value);

  }

  consultaCep() {
    if (this.formulario.controls['inputCep'].valid) {
      // tslint:disable-next-line:no-var-keyword
      var cep = this.formulario.controls['inputCep'].value;
      cep = cep.replace('-', '');
      console.log(cep);
      this.http.get(`https://viacep.com.br/ws/${cep}/json`).pipe(
        map(dados => this.prencherEnd(dados)));
        // .subscribe(dados => this.prencherEnd(dados));
    }

  }

  prencherEnd(dados) {
    console.log(dados);
    this.formulario.controls['inputRua'].setValue(
       dados._body.logradouro);
  }


}

