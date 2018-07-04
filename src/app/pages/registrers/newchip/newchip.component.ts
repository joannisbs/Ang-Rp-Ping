import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { chipFormGroup } from '../components/chip-form/chip.interface';

@Component({
  selector: 'app-newchip',
  templateUrl: './newchip.component.html',
  styleUrls: ['./newchip.component.css']
})
export class NewchipComponent implements OnInit {

  public formulario: FormGroup;
  public ocorreuSubmit = false;
  public ctl_lixo = 0;
  public chips;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      ...chipFormGroup,
      chips: this.formBuilder.array([this.createItem()]),
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.ocorreuSubmit = true;
  }
  formarray () {
    return this.formulario.get('chips').controls;
  }
  addChip(): void {
    scrollTo(0, 100000);
    this.chips = this.formulario.get('chips') as FormArray;
    this.chips.push(this.createItem());
  }
  showErrorsFormArray(value, index) {

    const chips = this.formulario.get('chips') as FormArray;

    return chips.at(index).get(value).valid || !(chips.at(index).get(value).touched || this.ocorreuSubmit);

  }

  removeChip(chip) {
    this.chips = this.formulario.get('chips') as FormArray;
    this.chips.removeAt(chip);
  }
  lixo(i) {
    this.ctl_lixo = i;
  }
  createItem(): FormGroup {
    return this.formBuilder.group({

      chip_Numchip: ['',
        [Validators.required,
        Validators.maxLength(45)]],
      chip_ip: ['',
        [Validators.required,
        Validators.maxLength(45)]],
      chip_Operadora: ['',
        [Validators.required,
        Validators.maxLength(45)]],
      chip_Data: ['',
        [Validators.required,
        Validators.maxLength(45)]],
    });
  }
}

