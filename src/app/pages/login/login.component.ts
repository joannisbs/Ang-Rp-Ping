import { AuthService } from '../../services/login/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserInteface } from '../../models/user/user'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { sha256 } from 'js-sha256';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup;
  
  //private usuario: UserInteface =  new UserInteface();

  private subcription: Subscription;

  private login: UserInteface = new UserInteface;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) {
    
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      user_nome: ['',
      [Validators.required]],
      user_pass: ['',
      [Validators.required]],

    })
  }

  montaobjct(){
    this.login.username = this.formulario.get('user_nome').value;
    this.login.password = this.formulario.get('user_pass').value;
    this.login.password = sha256(this.login.password);
 
  }

  validarlogin(){
    this.montaobjct();
    this.subcription = this.authService.fazerLogin(this.login).
      subscribe(( objeto ) => {
        this.authService.validarLogin( objeto );
    });
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}