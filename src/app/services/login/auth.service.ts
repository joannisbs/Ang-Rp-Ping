import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

import { environment } from '../../../environments/environment';
import { UserInteface } from '../../models/user/user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth: boolean = false;
  private api = environment.api_url;

  showNavEmmt = new EventEmitter<boolean>();

  constructor(private router: Router, private http: Http) { }

  fazerLogin(usuario: UserInteface){

    if (usuario.user_name === "user" && usuario.user_pass === "121314"){
      this.userAuth = true;
      this.showNavEmmt.emit(true);
      this.router.navigate(['/pages/register/newchip'])
    } else{
      this.userAuth = false;
      this.showNavEmmt.emit(false);
    }

  }

}
