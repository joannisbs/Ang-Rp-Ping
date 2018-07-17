import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

import { ChipInteface } from '../../models/chip/chip';

@Injectable({
  providedIn: 'root'
})
export class ChipService {

  private api = environment.api_url;

  constructor(private http: Http) { }

  cadastrarChip(chip): Observable<ChipInteface> {
    return this.http
      .post(`${this.api}/chip`, chip)
      .map(res => res.json());
  }

}
