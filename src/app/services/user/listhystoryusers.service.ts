import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { LoginInteface } from '../../models/login/login';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthService } from '../login/auth.service';
import { ListusersService } from './listusers.service';
import { GetListHistoryUserInteface, sizeoflistofuserInterface, personOfListUsersInterface, historyoflistofhistorysInterface } from '../../models/user/user';
import { StandartResponseInterface } from '../../models/standartResponse/standartResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ListhistoryUsersService {

  private api = environment.api_url;

  private listas = [];
  private user="NULL";


  constructor(private http: Http,
    private authService: AuthService,
    private listuserService: ListusersService,
    private router: Router) { }


  getUSER(){
    return this.listuserService.getUserSelec();
  }
  getHistoryUserList(filtros:GetListHistoryUserInteface): Observable<any> {
   filtros.ids = String(this.listuserService.getIddoUser());
    const token: LoginInteface = this.authService.GetToken();
      return this.http
          .post(`${this.api}/api/user/HistoryUsers/`, [token, filtros])
          .map(res => res.json());
  }

  ValidateList(response_server) {
    let response = [];
    if (this.authService.CheckStandartResponseLogin(response_server[0])){
      const sucessrequisition: StandartResponseInterface = response_server[1];

      if (sucessrequisition.sucess = true) {
        const sizeof: sizeoflistofuserInterface = response_server[2];
        ;
        let listsofuser: Array<historyoflistofhistorysInterface> = response_server[3]
        const tamanhodeusuariosrecebidos = listsofuser.length;
        let peaple = [];

        for(let index=0; index < tamanhodeusuariosrecebidos;index++) {
          let person:historyoflistofhistorysInterface = listsofuser[index];
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
  
  
}
