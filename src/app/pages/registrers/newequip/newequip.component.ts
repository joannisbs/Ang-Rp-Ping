import { Component, OnInit } from '@angular/core';
import { equipFormGroup } from '../components/equip-form/equip.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newequip',
  templateUrl: './newequip.component.html',
  styleUrls: ['./newequip.component.css']
})
export class NewequipComponent implements OnInit {

  public formulario: FormGroup;
  public imagebutton = '/assets/icons/xred.png';
  public showimg = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      ...equipFormGroup,
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
