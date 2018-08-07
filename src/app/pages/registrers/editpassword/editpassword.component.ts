import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NovasenhaService } from 'src/app/services/user/novasenha.service';
import { AuthService } from 'src/app/services/login/auth.service';
import { StandartResponseInterface } from 'src/app/models/standartResponse/standartResponse';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.css']
})
export class EditpasswordComponent implements OnInit {
  private subcription: Subscription;
  public senhanaoconfere = false;
  public formulario: FormGroup;

  public validade = false;
  private SENHAS;
  public showModal = false;

  constructor(private formBuilder: FormBuilder,
    private newpassService: NovasenhaService,
    private authService: AuthService,) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      user_pass: ['',
        [Validators.required,
        Validators.maxLength(45),
        Validators.pattern('[a-zA-Z0-9]{3,}.*')]],
      user_pass2: ['',
      [Validators.required,
      Validators.maxLength(45),
      Validators.pattern('[a-zA-Z0-9]{3,}.*')]],

    });
  }
  SalvaSenha() {
    const token = this.authService.GetToken();
    this.subcription = this.newpassService
        .newUser(token,this.SENHAS)
        .subscribe(response => {
          
          const sucessCreate: boolean = this.newpassService.Validate(response);
          if (sucessCreate) {
            this.showModal = true;
          }else{
            alert("ERRO DESCONHECIDO")
          }

        }
        );
    console.log(this.SENHAS);
  }
  verifica() {
    this.validade = false;
    this.senhanaoconfere = false;
    this.SENHAS = '';
    const senha1 = this.formulario.get('user_pass').value;
    const senha2 = this.formulario.get('user_pass2').value;
    if (senha1 != '')
    {
      if (senha2 != '') {
        if (senha1 != senha2) {
          this.senhanaoconfere = true;
          this.validade = false;
        }
        if (senha1 == senha2) {
          this.validade = true; 
          this.SENHAS = sha256(senha1);
        }

      }  
    }

  }

}
