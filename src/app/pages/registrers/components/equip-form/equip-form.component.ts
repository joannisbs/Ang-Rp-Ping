import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equip-form',
  templateUrl: './equip-form.component.html',
  styleUrls: ['./equip-form.component.css']
})
export class EquipFormComponent implements OnInit {

  @Input()
  equipForm;

  constructor() { }

  ngOnInit() {
  }

}
