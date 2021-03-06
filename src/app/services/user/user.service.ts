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
export class NewUserService {

  private api = environment.api_url;

  constructor(private http: Http,private authService: AuthService,
    private router: Router) { }
  
  Validate(response_server) {
    if (this.authService.CheckStandartResponseLogin(response_server[0])){
      const sucessrequisition: StandartResponseInterface = response_server[1];

      if (sucessrequisition.sucess = true) {
        const sucessSalve: StandartResponseInterface = response_server[2];
        return sucessSalve;
      }
      alert("Você não tem permissão para fazer isso.");
      this.router.navigate(['/login'])
    }
    alert("Sessão inválida, por favor faça login novamente.");
    this.router.navigate(['/login'])
  }

  newUser(token: LoginInteface ,usuario: newUserInteface): Observable<any> {
    return this.http
      .post(`${this.api}/api/user/newUser/`, [token ,usuario])
      .map(res => res.json());
  }

}
