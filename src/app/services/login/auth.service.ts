import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../../environments/environment';
import { UserInteface } from '../../models/user/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth: boolean = false;
  
  private api = environment.api_url;

  showNavEmmt = new EventEmitter<boolean>();

  constructor(private http: Http, private router: Router) { }

  fazerLogin(usuario: UserInteface):Observable<any>{

    return  this.http
      .post(`${this.api}/api/login/`, usuario)
      .map(res => res.json());

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
