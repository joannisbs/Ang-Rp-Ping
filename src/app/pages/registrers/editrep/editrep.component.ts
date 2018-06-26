import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addressFormGroup } from '../components/address-form/address.interface';
import { repFormGroup } from '../components/rep-form/rep.interface';

@Component({
  selector: 'app-editrep',
  templateUrl: './editrep.component.html',
  styleUrls: ['./editrep.component.css']
})


export class EditrepComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
        ...repFormGroup,
        ...addressFormGroup
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
  }
}
