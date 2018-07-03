import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-module-form',
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.css']
})
export class ModuleFormComponent implements OnInit {

  @Input()
  moduleForm;

  @Input()
  ocorreuSubmit;

  @Input()
  formPassive;

  constructor() { }

  ngOnInit() {
  }

  showErrors(value) {
    return this.moduleForm.controls[ value ].valid || !(this.moduleForm.controls[ value].touched || this.ocorreuSubmit);
  }
}
