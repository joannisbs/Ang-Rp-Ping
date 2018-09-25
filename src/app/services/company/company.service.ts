import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { StandartSearchList } from 'src/app/models/standartResponse/standartResponse';
import { LoginInteface } from 'src/app/models/login/login';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private api = environment.api_url;

  constructor(  private http: Http,
                private authService: AuthService,
                private router: Router
  ) { }

  cadastrarCompany(company): Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
    return this.http
      .post(`${this.api}/api/user/NewCompany`, [ token, company ] )
      .map(res => res.json());
  }

  listarCompanys ( data_search:StandartSearchList, desativo ):Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
    
    if (desativo == true){
      return this.http
      .post(`${this.api}/api/user/NewCompany`, [ token, data_search ] )
      .map(res => res.json());

    }else{
      return this.http
      .post(`${this.api}/api/user/ListActivedCompany`, [ token, data_search ] )
      .map(res => res.json());

    }

  }


}

