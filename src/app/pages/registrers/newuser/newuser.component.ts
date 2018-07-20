
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserComumFormGroup } from '../components/user-comum-form/user-comum.interface';
import { NewUserService } from '../../../services/user/user.service';
import { AuthService } from '../../../services/login/auth.service';
import { Subscription } from 'rxjs';
import { sha256 } from 'js-sha256';
import { newUserInteface } from '../../../models/user/user';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  
  private subcription: Subscription;
  private users: newUserInteface = new newUserInteface;

  public formulario: FormGroup;

  public ocorreuSubmit = false;
  public diferencasenha = false;
  public showModal = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private newUserService: NewUserService) { }

  montaobjct(){
    this.users.user_name = this.formulario.get('user_login').value;
    this.users.user_pasw = this.formulario.get('user_psw').value;
    this.users.user_pasr = this.formulario.get('user_re_psw').value;
    this.users.user_pasw = sha256(this.users.user_pasw);
    this.users.user_pasr = sha256(this.users.user_pasr);
    this.users.user_tipe = this.formulario.get('user_tipe').value;
    
  }
  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      ...UserComumFormGroup,
      user_tipe: ['',
      [Validators.required,
      Validators.pattern('[0-9]')]],

    });
  }
  ClearForm() {
    this.formulario.reset();
    this.showModal = false;
  }

  onSubmit(usuario, valido) {
    if (valido) {  
      const senha1 = this.formulario.get('user_psw').value;
      const senha2 = this.formulario.get('user_re_psw').value;
      
      if ( senha1 === senha2) {

        this.montaobjct();
        console.log(this.users);
        this.ocorreuSubmit = false;
        const token = this.authService.getToken();
        this.subcription = this.newUserService
        .newUser(token,this.users)
        .subscribe(res => {
          console.log(res);
          this.showModal = true;
          this.ocorreuSubmit = false;
        }
        );
      } else {
        this.ocorreuSubmit = true;
        this.diferencasenha = true;
      }   
    }
    else {
      this.ocorreuSubmit = true;    
  }
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

}


// class NewUserToSend {
//     user_name:string;
//     user_pasw:string;
//     user_pasr:string;
//     user_tipe:string;

//     constructor(){
//       this.user_name = ;
//       this.user_pasw = ;
//       this.user_pasr = ;
//       this.user_tipe = ;
//     }

// }