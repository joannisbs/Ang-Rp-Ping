import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../../environments/environment';
import { UserInteface } from '../../models/user/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginInteface } from '../../models/login/login';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //TokenAuthVariables
  private objectToken;



  private userAuth: boolean = false;
  
  private api = environment.api_url;

  showNavEmmt = new EventEmitter<boolean>();

  constructor(private http: Http, private router: Router) { }

  fazerLogin(usuario: UserInteface):Observable<LoginInteface>{

    return  this.http
      .post(`${this.api}/api/user/login/`, usuario)
      .map(res => res.json());

    }
  validarLogin(objeto) {
  
    this.objectToken = objeto;

    if (objeto.status === "True"){
      
      this.userAuth = true;
      this.showNavEmmt.emit(true);
      this.router.navigate(['/pages/register/newchip'])
    } else{
      this.userAuth = false;
      this.showNavEmmt.emit(false);
      alert("SENHA INVALIDA");
    }
  }

  CheckUserAuthenticate(){
    return this.userAuth;
  }

  getToken(){
    if (this.userAuth){
      return this.objectToken;              
      
    }
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
