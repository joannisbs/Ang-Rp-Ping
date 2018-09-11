
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewUserService } from '../../../services/user/user.service';
import { AuthService } from '../../../services/login/auth.service';
import { Subscription } from 'rxjs';
import { newUserInteface } from '../../../models/user/user';
import { StandartResponseInterface } from '../../../models/standartResponse/standartResponse';

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
  
  showErrors(value) {
    return this.formulario.controls[ value ].valid || !(this.formulario.controls[ value].touched || this.ocorreuSubmit);
  }
  montaobjct(){
    this.users.user_name = this.formulario.get('user_login').value;
    this.users.user_tipe = this.formulario.get('user_tipe').value;
    
  }
  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      user_login: ['',
        [Validators.required,
        Validators.maxLength(25),
        Validators.pattern('[a-z]{3,}.*')]],
      user_tipe: ['',
      [Validators.required,
      Validators.pattern('[0-9]')]],

    });
  }
  ClearForm() {
    this.formulario.reset();
    this.showModal = false;
  }

  onSubmit(valido) {
    if (valido) {  

      this.montaobjct();
      this.ocorreuSubmit = false;
      const token = this.authService.GetToken();
      this.subcription = this.newUserService
        .newUser(token,this.users)
        .subscribe(response => {
          
          const sucessCreate: StandartResponseInterface = this.newUserService.Validate(response);
          if (sucessCreate.sucess == true) {
            this.showModal = true;
            this.ocorreuSubmit = false;
          }else{
          
              alert("Usuário já cadastrado.")
            
          }

        }
        );
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

