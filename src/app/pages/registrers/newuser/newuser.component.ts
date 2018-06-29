
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
  public showimg = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      ...UserComumFormGroup,
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
  }
  hideImage() {
    this.showimg = false;
  }
  showImage(value) {
    this.showimg = true;
    if (value) {
      this.imagebutton = '/assets/icons/certoverde.png';
    } else {
      this.imagebutton = '/assets/icons/xred.png';
    }

  }
}
