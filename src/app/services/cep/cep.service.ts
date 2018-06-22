import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: Http) { }

  consultaCep(cep): Observable<any> {
    return this.http
      .get(`https://viacep.com.br/ws/${cep}/json`)
      .map(res => res.json());
  }

}
