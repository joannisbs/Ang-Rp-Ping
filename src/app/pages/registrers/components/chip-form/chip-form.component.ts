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

}
