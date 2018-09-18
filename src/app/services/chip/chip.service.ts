import { LoginInteface } from '../../models/login/login';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

import { AuthService } from '../login/auth.service';
import { StandartResponseInterface } from '../../models/standartResponse/standartResponse';
import { Router } from '@angular/router';
import { ListChipsInteface, ChipInteface, ListChipHistoryInteface } from 'src/app/models/chip/chip';

@Injectable({
  providedIn: 'root'
})

export class ChipService {
  
  private api = environment.api_url;
  private chipidhistory = '0';

  constructor(private http: Http,
    private authService: AuthService,
    private router: Router) { }
  
    Validate(response_server) {
      if (this.authService.CheckStandartResponseLogin(response_server[0])){
        const sucessrequisition: StandartResponseInterface = response_server[1];
  
        if (sucessrequisition.sucess = true) {
          return response_server[2];
        }
        alert("Você não tem permissão para fazer isso.");
        return false;
      }
      alert("Sessão inválida, por favor faça login novamente.");
      this.router.navigate(['/login'])
  }

  cadastrarChip(chip:ChipInteface): Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
    return this.http
      .post(`${this.api}/api/user/newChip/`,[token ,chip])
      .map(res => res.json());
  }
  listarChip(listpage:ListChipsInteface,desativo):Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
    if ( desativo == false){
    return this.http
      .post(`${this.api}/api/user/listChip/`,[token ,listpage])
      .map(res => res.json());
    }
    else {
      return this.http
      .post(`${this.api}/api/user/listDesactivedChip/`,[token ,listpage])
      .map(res => res.json());
    }
  }
  DeletarrChip(chipid, motivo): Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
    return this.http
      .post(`${this.api}/api/user/ChipDelete/`,[token ,chipid, motivo])
      .map(res => res.json());
  }
  AtivarChip(chipid, motivo): Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
    return this.http
      .post(`${this.api}/api/user/ChipActive/`,[token ,chipid, motivo])
      .map(res => res.json());
  }
  EditChipIp(chip,motivo): Observable<any> {
    const token: LoginInteface = this.authService.GetToken();
    return this.http
      .post(`${this.api}/api/user/ChipEditIp/`,[token ,chip,motivo])
      .map(res => res.json());
  }
  HistoryChip(chipid) {
    this.chipidhistory = chipid;
    this.router.navigate(['/pages/manager/listhistorychip']);
  }
  GetChipid(){
    return this.chipidhistory;
  }
  ListHistoryChip(chipvalue:ListChipHistoryInteface){
    const token: LoginInteface = this.authService.GetToken();
    return this.http
      .post(`${this.api}/api/user/ChipListHistory/`,[token ,chipvalue])
      .map(res => res.json());
  }
}




