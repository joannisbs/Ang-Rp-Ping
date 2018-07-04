import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chip-form',
  templateUrl: './chip-form.component.html',
  styleUrls: ['./chip-form.component.css']
})
export class ChipFormComponent implements OnInit {

  @Input()
  chipForm;

  @Input()
  ocorreuSubmit;

  @Input()
  formPassive;

  constructor() { }

  ngOnInit() {
  }
  showErrors(value) {
    return this.chipForm.controls[ value ].valid || !(this.chipForm.controls[ value].touched || this.ocorreuSubmit);
  }

}
