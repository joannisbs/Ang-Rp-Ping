import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor() { }



consultaCep(cep) {
 return console.log(cep);
  // if (this.formulario.controls['inputCep'].valid) {
  //   // tslint:disable-next-line:no-var-keyword
  //   var cep = this.formulario.controls['inputCep'].value;
  //   cep = cep.replace('-', '');
  //   console.log(cep);
  //   this.http.get(`https://viacep.com.br/ws/${cep}/json`).pipe(
  //     map(dados => this.prencherEnd(dados)));
  //     // .subscribe(dados => this.prencherEnd(dados));
  // }

}

}
