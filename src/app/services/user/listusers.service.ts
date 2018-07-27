import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { LoginInteface } from '../../models/login/login';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ListusersService {

  private api = environment.api_url;

  private IDdoUsuarioSelecionado = 0;

  constructor(private http: Http,
    private authService: AuthService,
    private router: Router) { }

    setIDdoUser(valor) {
      this.IDdoUsuarioSelecionado = valor;
      this.router.navigate(['/pages/manager/listhistoryusers'])
    }

    getIddoUser() {
      return this.IDdoUsuarioSelecionado;
    }
    DesativarConta(valor) {
      const Iddouser = valor;
      const token: LoginInteface = this.authService.getToken();
        return this.http
            .post(`${this.api}/api/user/DeleteUsers/`, [token, Iddouser])
            .map(res => res.json());
    }
    getList(page, filtro): Observable<any> {
    const token: LoginInteface = this.authService.getToken();
      return this.http
          .post(`${this.api}/api/user/ListUsers/`, [token, page , filtro])
          .map(res => res.json());
  }
  
}
