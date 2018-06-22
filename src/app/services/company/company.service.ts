import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private api = environment.api_url;

  constructor(private http: Http) { }

  cadastrarCompany(company): Observable<any> {
    return this.http
      .post(`${this.api}/company`, company)
      .map(res => res.json());
  }

}
