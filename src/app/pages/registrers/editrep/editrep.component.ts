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
  public imagebutton = '/assets/icons/xred.png';
  public showimg = false;
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
