import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { CepInteface } from '../../models/cep/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private api = 'https://viacep.com.br/ws';
  constructor(private http: Http) { }

  consultaCep(cep): Observable<CepInteface> {
    return this.http
      .get(`${this.api}/${cep}/json`)
      .map(res => res.json());
  }

}
