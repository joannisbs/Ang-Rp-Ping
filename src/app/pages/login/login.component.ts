import { AuthService } from '../../services/login/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserInteface } from '../../models/user/user'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup;
  
  //private usuario: UserInteface =  new UserInteface();

  private subcription: Subscription;
  
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

  validarlogin(usuario){
    this.subcription = this.authService.fazerLogin(usuario).
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