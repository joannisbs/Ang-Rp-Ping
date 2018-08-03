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
  private UsuarioSelecionado = "NULL";

  constructor(private http: Http,
    private authService: AuthService,
    private router: Router) { }

    setIDdoUser(valor,valor2) {
      this.IDdoUsuarioSelecionado = valor;
      this.UsuarioSelecionado = valor2;
      this.router.navigate(['/pages/manager/listhistoryusers'])
    }
    getUserSelec() {
      return this.UsuarioSelecionado;
    }
    getIddoUser() {
      return this.IDdoUsuarioSelecionado;
    }

    ValidateDesactive(response_server) {
      if (this.authService.CheckStandartResponseLogin(response_server[0])) {
        const sucessrequisition: StandartResponseInterface = response_server[1];

        if (sucessrequisition.sucess = true) {
          return true;

        }
      }
      return false
    }

    ResetarSenha ( valor ) {
      const Iddouser = valor;
      const token: LoginInteface = this.authService.GetToken();
        return this.http
        .post(`${this.api}/api/user/ResetPasswordUsers/`, [token, Iddouser])
            .map(res => res.json());
    }

    ReativarConta(valor) {
      const Iddouser = valor;
      const token: LoginInteface = this.authService.GetToken();
        return this.http
            .post(`${this.api}/api/user/ReactiveUsers/`, [token, Iddouser])
            .map(res => res.json());
    }

    DesativarConta(valor) {
      const Iddouser = valor;
      const token: LoginInteface = this.authService.GetToken();
        return this.http
            .post(`${this.api}/api/user/DeleteUsers/`, [token, Iddouser])
            .map(res => res.json());
    }
    AlterarTipoConta(valor) {
      const person = valor;
      const token: LoginInteface = this.authService.GetToken();
        return this.http
            .post(`${this.api}/api/user/EditUser/`, [token, person])
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

    getList_Server(filters,condicion): Observable<any> {
      const token: LoginInteface = this.authService.GetToken();
      if (!condicion){
        return this.http
            .post(`${this.api}/api/user/ListUsers/`, [token, filters])
            .map(res => res.json());
      }else{
        return this.http
        .post(`${this.api}/api/user/ListDesactiveUsers/`, [token, filters])
        .map(res => res.json());
      }
  }
  
}
