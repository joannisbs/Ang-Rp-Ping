import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      // ...moduleFormGroup,
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.ocorreuSubmit = true;
  }


}
