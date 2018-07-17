import { AuthService } from './../../services/login/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserInteface } from './../../models/user/user'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup;
  
  private usuario: UserInteface =  new UserInteface();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) {
    
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      user_name: ['',
      [Validators.required]],
      user_pass: ['',
      [Validators.required]],

    })
  }
  validarlogin(usuario){
    console.log(this.formulario.value);
    this.authService.fazerLogin(usuario);
  }

}
