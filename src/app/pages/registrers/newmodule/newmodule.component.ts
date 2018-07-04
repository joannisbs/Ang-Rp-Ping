import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { chipFormGroup } from '../components/chip-form/chip.interface';
import { moduleFormGroup } from '../components/module-form/module.interface';

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
      ...chipFormGroup,
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.ocorreuSubmit = true;
  }


}
