import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { chipFormGroup } from '../components/chip-form/chip.interface';

@Component({
  selector: 'app-newchip',
  templateUrl: './newchip.component.html',
  styleUrls: ['./newchip.component.css']
})
export class NewchipComponent implements OnInit {

  public formulario: FormGroup;
  public ocorreuSubmit = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
       ...chipFormGroup,
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.ocorreuSubmit = true;
  }


}
