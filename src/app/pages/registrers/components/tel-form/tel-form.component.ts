import { Component, OnInit, Input } from '@angular/core';

import { arrumaTelefone } from './../../../../generic/funcoes-genericas/arrumaTel.function';

@Component({
  selector: 'app-tel-form',
  templateUrl: './tel-form.component.html',
  styleUrls: ['./tel-form.component.css']
})
export class TelFormComponent implements OnInit {

  @Input()
  telForm;

  @Input()
  ocorreuSubmit;

  constructor() { }

  ngOnInit() {

  }
  showErrors(value) {
    return this.telForm.controls[ value ].valid || !(this.telForm.controls[ value].touched || this.ocorreuSubmit);
  }
  arrumaTel(value , campo) {
    const res = arrumaTelefone(value);
    this.telForm.get(campo).patchValue(res);
  }
}
