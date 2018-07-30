import { LoginInteface } from './../../models/login/login';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

import { ChipInteface } from '../../models/chip/chip';
import { AuthService } from 'src/app/services/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChipService {
  
  private api = environment.api_url;

  constructor(private http: Http,
    private authService: AuthService) { }

  cadastrarChip(chip): Observable<ChipInteface> {
    const token = this.authService.GetToken();
    return this.http
      .post(`${this.api}/api/user/newChip/`,[token ,chip])
      .map(res => res.json());
  }

}
