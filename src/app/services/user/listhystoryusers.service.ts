import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { LoginInteface } from '../../models/login/login';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthService } from '../login/auth.service';
import { ListusersService } from 'src/app/services/user/listusers.service';

@Injectable({
  providedIn: 'root'
})

export class ListhistoryUsersService {

  private api = environment.api_url;


  constructor(private http: Http,
    private authService: AuthService,
    private listuserService: ListusersService) { }

  getHistoryUserList(page, filtro): Observable<any> {
    const Iddouser = this.listuserService.getIddoUser();
    const token: LoginInteface = this.authService.getToken();
      return this.http
          .post(`${this.api}/api/user/HistoryUsers/`, [token, Iddouser, page , filtro])
          .map(res => res.json());
  }
  DesativarConta() {
    const Iddouser = this.listuserService.getIddoUser();
    const token: LoginInteface = this.authService.getToken();
      return this.http
          .post(`${this.api}/api/user/DeleteUsers/`, [token, Iddouser])
          .map(res => res.json());
  }
  
}
