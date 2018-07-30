import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../../environments/environment';
import { UserInteface } from '../../models/user/user';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoginInteface } from '../../models/login/login';
import { StandartResponseInterface } from 'src/app/models/standartResponse/standartResponse';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //tokenAuthVariables
  private object_token;
  private nivel;

  private subcription: Subscription;

  private userAuth: boolean = false;
  
  private api = environment.api_url;

  showNavEmmt = new EventEmitter<boolean>();
  nivelEmmt   = new EventEmitter();

  constructor(private http: Http, private router: Router) { }

  FazerLogin(response_login){
    const standart_response: StandartResponseInterface = response_login[0];
    if (standart_response.sucess === true) {
      const token: LoginInteface = response_login[1]   
      this.object_token = token;
      this.nivel = token.nivel;
    
      if (token.status === "True"){
        this.nivelEmmt.emit(token.nivel);
        this.Logar();
        this.router.navigate(['/pages/monitor/visaogeral'])
      } else{
        alert("Login ou senha inválido");
        this.Deslog();
      }
    }else{
      alert("Login ou senha inválido");
      this.Deslog(); 
    }
  }

  CheckStandartResponseLogin(respostaServer:StandartResponseInterface){
    if (respostaServer.sucess) {
      return true;
    }
    this.Deslog();
    return false;
  }

  CheckUserAuthenticate(){
    return this.userAuth;
  }

  GetToken(){
    if (this.userAuth){
      return this.object_token;              
    }
    this.router.navigate(['/pages/login']);
  }

  GetNivel(){
    return this.nivel;
  }

  ApiLogin_MethodHttp(usuario: UserInteface):Observable<any>{
    return  this.http
      .post(`${this.api}/api/user/login/`, usuario)
      .map(res => res.json());
  }

  Logar(){
    this.userAuth = true;
    this.showNavEmmt.emit(true);
  }

  Deslog(){
    this.userAuth = false;
    this.showNavEmmt.emit(false);
    this.nivelEmmt.emit('0');
    this.router.navigate(['/pages/login']);
  }


}
