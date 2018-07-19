
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserComumFormGroup } from '../components/user-comum-form/user-comum.interface';
import { NewUserService } from './../../../services/user/user.service';
import { AuthService } from '../../../services/login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  private newUserService: NewUserService;
  private subcription: Subscription;

  public formulario: FormGroup;
  public imagebutton = '/assets/icons/xred.png';
  public ocorreuSubmit = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      ...UserComumFormGroup,
    });
  }
  
  onSubmit(usuario, valido) {

    if (valido) {
      console.log('Valido');
      this.ocorreuSubmit = false;
      const token = this.authService.getToken();
      this.subcription = this.newUserService
      .newUser(token,usuario)
      .subscribe(res => {
        console.log(res);
        // this.showModal = true;
      }
      );
    } else {
      this.ocorreuSubmit = true;
    }
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

}
