import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { moduleFormGroup } from '../components/module-form/module-form.interface';

@Component({
  selector: 'app-newmodule',
  templateUrl: './newmodule.component.html',
  styleUrls: ['./newmodule.component.css']
})
export class NewmoduleComponent implements OnInit {

  public formulario: FormGroup;
  public ocorreuSubmit = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      ...moduleFormGroup,
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.ocorreuSubmit = true;
  }


}
