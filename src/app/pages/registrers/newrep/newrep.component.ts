import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { addressFormGroup } from '../components/address-form/address.interface';
import { repFormGroup } from '../components/rep-form/rep.interface';
import { arrumaTelefone } from '../../../generic/funcoes-genericas/arrumaTel.function';



@Component({
  selector: 'app-newrep',
  templateUrl: './newrep.component.html',
  styleUrls: ['./newrep.component.css']
})
export class NewrepComponent implements OnInit {

  public formulario: FormGroup;
  public imagebutton = '/assets/icons/xred.png';
  public showimg = false;
  public ocorreuSbmit = false;
  public tels;
  constructor(private formBuilder: FormBuilder) { }


  formarray () {
    return this.formulario.get('tels').controls;
  }
  ngOnInit() {
    this.formulario = this.formBuilder.group ({
        ...repFormGroup,
        ...addressFormGroup,
        tels: this.formBuilder.array([ this.createItem() ]),

        // ...telFormGroup,
    });

  }
  onSubmit() {
    this.ocorreuSbmit = true;
    console.log(this.formulario.value);
  }
  addTel(): void {

    this.tels = this.formulario.get('tels') as FormArray;
    this.tels.push( this.createItem() );
  }
  showErrors(value) {
    return true;
    // return this.formulario.controls[ value ].valid || !(this.formulario.controls[ value].touched || this.ocorreuSbmit);
  }
  arrumaTel(value , index) {
    const tels = this.formulario.get('tels') as FormArray;
    const res = arrumaTelefone(value);
    tels.at(index).get('tel_number').patchValue(res);
  }
  removeItem(tel) {
    this.tels = this.formulario.get('tels') as FormArray;
    this.tels.removeAt(tel);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({

      tel_number: ['',
        [Validators.required,
        Validators.maxLength(14),
        Validators.pattern('[\(]?[0-9]{2}(( )|([\)])|()|(-))(([0-9]{4})|([0-9]{5}))(( )|(-)|)([0-9]{4})')]],

      tel_resp: ['',
        [Validators.required,
        Validators.maxLength(1),
        Validators.pattern('[1-2]')]],
    });
  }

}
