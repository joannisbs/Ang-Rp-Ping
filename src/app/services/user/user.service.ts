import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { newUserInteface } from '../../models/user/user';
import { LoginInteface } from '../../models/login/login';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  private api = environment.api_url;

  constructor(private http: Http) { }

  newUser(token: LoginInteface ,usuario: newUserInteface): Observable<any> {
    return this.http
      .post(`${this.api}/user/newuser`, [token ,usuario])
      .map(res => res.json());
  }

}
