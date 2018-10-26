import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { StandartSearchList, StandartDelete } from 'src/app/models/standartResponse/standartResponse';
import { LoginInteface } from 'src/app/models/login/login';
import { EmpresaInteface } from 'src/app/models/company/company';

@Injectable({
  providedIn: 'root'
})
export class RepService {

  private api = environment.api_url;

  private companyasereditada : EmpresaInteface;

  private companyStorie;

  constructor(  private http: Http,
                private authService: AuthService,
                private router: Router
  ) { }

  newequip(equip): Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
    return this.http
      .post(`${this.api}/api/user/Newequip`, [ token, equip ] )
      .map(res => res.json());
  }

  

}

