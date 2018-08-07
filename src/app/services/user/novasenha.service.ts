import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { newUserInteface } from '../../models/user/user';
import { LoginInteface } from '../../models/login/login';
import { StandartResponseInterface } from '../../models/standartResponse/standartResponse';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NovasenhaService {

  private api = environment.api_url;

  constructor(private http: Http,private authService: AuthService,
    private router: Router) { }
  
  Validate(response_server) {
    if (this.authService.CheckStandartResponseLogin(response_server[0])){
      const sucessrequisition: StandartResponseInterface = response_server[1];

      if (sucessrequisition.sucess = true) {
        return true;
      }
      return false;
    }
    alert("Sessão inválida, por favor faça login novamente.");
    this.router.navigate(['/login'])
  }

  newUser(token: LoginInteface ,password): Observable<any> {
    return this.http
      .post(`${this.api}/api/user/newPassword/`, [token ,password])
      .map(res => res.json());
  }

}
