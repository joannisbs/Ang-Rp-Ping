
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserComumFormGroup } from '../components/user-comum-form/user-comum.interface';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  public formulario: FormGroup;
  public imagebutton = '/assets/icons/xred.png';
  public ocorreuSubmit = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      ...UserComumFormGroup,
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.ocorreuSubmit = true;
  }

}
