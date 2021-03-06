import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { addressFormGroup } from '../components/address-form/address.interface';
import { repFormGroup } from '../components/rep-form/rep.interface';
import { arrumaTelefone } from '../../../generic/funcoes-genericas/arrumaTel.function';
import { moduleFormGroup } from '../components/module-form/module.interface';
import { chipFormGroup } from '../components/chip-form/chip.interface';


@Component({
  selector: 'app-newrep',
  templateUrl: './newrep.component.html',
  styleUrls: ['./newrep.component.css']
})
export class NewrepComponent implements OnInit {

  public formulario: FormGroup;
  public ctl_lixo = 0;
  public telefoneInvalido = false;
  public ocorreuSubmit = false;
  public tels;

  constructor(private formBuilder: FormBuilder) { }


  formarray () {
    const formstring  = this.formulario.get('tels') as FormArray;
    return formstring;
  }
  ngOnInit() {
    this.formulario = this.formBuilder.group ({
        ...repFormGroup,
        ...addressFormGroup,
        ...moduleFormGroup,
        ...chipFormGroup,
        tels: this.formBuilder.array([ this.createItem() ]),

        // ...telFormGroup,
    });

  }
  lixo(i) {
    this.ctl_lixo = i;
  }

  onSubmit() {
    this.ocorreuSubmit = true;
    console.log(this.formulario.value);
  }
  addTel(): void {
    scrollTo(0, 100000);
    this.tels = this.formulario.get('tels') as FormArray;
    this.tels.push( this.createItem() );
  }
  showErrorsFormArray(value, index) {

    const tels = this.formulario.get('tels') as FormArray;

    return tels.at(index).get(value).valid || !(tels.at(index).get(value).touched || this.ocorreuSubmit);

  }

  arrumaTel(value , index) {
    const tels = this.formulario.get('tels') as FormArray;
    const res = arrumaTelefone(value);
    tels.at(index).get('tel_number').patchValue(res);

  }
  removeTel(tel) {
    this.tels = this.formulario.get('tels') as FormArray;
    this.tels.removeAt(tel);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({

      tel_number: ['',
        [Validators.required,
        Validators.maxLength(14),
        Validators.pattern(/[\(][0-9]{2}([\)])(([0-9]{4})|([0-9]{5}))(-)([0-9]{4})/ig)]],

      tel_resp: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    });
  }

}
