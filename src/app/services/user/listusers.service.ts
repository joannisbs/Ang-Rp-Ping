import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { LoginInteface } from '../../models/login/login';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthService } from 'src/app/services/login/auth.service';

@Injectable({
  providedIn: 'root'
})

export class ListusersService {

  private api = environment.api_url;

  constructor(private http: Http,
    private authService: AuthService) { }

  getList(page, filtro): Observable<any> {
    const token: LoginInteface = this.authService.getToken();
      return this.http
          .post(`${this.api}/api/user/ListUsers/`, [token, page , filtro])
          .map(res => res.json());
  }
  
}
