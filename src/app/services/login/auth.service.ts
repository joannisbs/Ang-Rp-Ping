import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../../environments/environment';
import { UserInteface } from '../../models/user/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginInteface } from '../../models/login/login';
import { StandartResponseInterface } from 'src/app/models/standartResponse/standartResponse';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //TokenAuthVariables
  private objectToken;
  private nivel;


  private userAuth: boolean = false;
  
  private api = environment.api_url;

  showNavEmmt = new EventEmitter<boolean>();
  nivelEmmt   = new EventEmitter();

  constructor(private http: Http, private router: Router) { }

  fazerLogin(usuario: UserInteface):Observable<any>{

    return  this.http
      .post(`${this.api}/api/user/login/`, usuario)
      .map(res => res.json());

    }

  validarLogin(respostaServer) {
    const respostaPadrao: StandartResponseInterface = respostaServer[0]
    
    if (respostaPadrao.sucess === true) {
      const Token: LoginInteface = respostaServer[1]   
      this.objectToken = Token;
      this.nivel = Token.nivel;
    
      if (Token.status === "True"){
        
        this.userAuth = true;
        this.nivelEmmt.emit(Token.nivel);
        this.showNavEmmt.emit(true);
        this.router.navigate(['/pages/monitor/visaogeral'])

      } else{

        this.userAuth = false;
        this.showNavEmmt.emit(false);
        alert("Login ou senha inválido");
      }

    }else{
      this.userAuth = false;
      this.showNavEmmt.emit(false);
      alert("Login ou senha inválido");
    }
    
  }
  Deslog(){
    this.userAuth = false;
    this.showNavEmmt.emit(false);
  }
  CheckUserAuthenticate(){
    return this.userAuth;
  }

  getToken(){
    if (this.userAuth){
      return this.objectToken;              
    }
  }
  getNivel(){
    return this.nivel;
  }

    // console.log(resposta);


    // if (usuario.user_name === "user" && usuario.user_pass === "121314"){
    //   this.userAuth = true;
    //   this.showNavEmmt.emit(true);
    //   //this.router.navigate(['/pages/register/newchip'])
    // } else{
    //   this.userAuth = false;
    //   this.showNavEmmt.emit(false);
    // }

  

}
