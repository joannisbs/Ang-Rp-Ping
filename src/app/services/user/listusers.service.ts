import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { LoginInteface } from '../../models/login/login';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { StandartResponseInterface } from 'src/app/models/standartResponse/standartResponse';
import { sizeoflistofuserInterface, personOfListUsersInterface } from 'src/app/models/user/user';

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
      const token: LoginInteface = this.authService.GetToken();
        return this.http
            .post(`${this.api}/api/user/DeleteUsers/`, [token, Iddouser])
            .map(res => res.json());
    }
    ValidateList(response_server) {
      let response = [];
      if (this.authService.CheckStandartResponseLogin(response_server[0])){
        const sucessrequisition: StandartResponseInterface = response_server[1];

        if (sucessrequisition.sucess = true) {
          const sizeof: sizeoflistofuserInterface = response_server[2];

          let listsofuser: Array<personOfListUsersInterface> = response_server[3]
          const tamanhodeusuariosrecebidos = listsofuser.length;
          let peaple = [];

          for(let index=0; index < tamanhodeusuariosrecebidos;index++) {
            let person:personOfListUsersInterface = listsofuser[index];
            peaple.push(person);
          }
          response.push(sizeof);
          response.push(peaple);
          return response;
        }
        alert("Nenhum usuário foi encontrado.");
        return 0;
      }
      this.router.navigate(['/login'])
    }

    getList_Server(filters): Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
      return this.http
          .post(`${this.api}/api/user/ListUsers/`, [token, filters])
          .map(res => res.json());
  }
  
}
