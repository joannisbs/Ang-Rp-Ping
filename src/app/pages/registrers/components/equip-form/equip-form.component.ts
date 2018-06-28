import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equip-form',
  templateUrl: './equip-form.component.html',
  styleUrls: ['./equip-form.component.css']
})
export class EquipFormComponent implements OnInit {

  @Input()
  equipForm;

  public imagebutton = ['/assets/icons/xred.png', '/assets/icons/xred.png', '/assets/icons/xred.png', '/assets/icons/xred.png'];
  constructor() { }

  ngOnInit() {
  }
  showImage(value, number) {
    if (value) {
      this.imagebutton[number] = '/assets/icons/certoverde.png';
    } else {
      this.imagebutton[number] = '/assets/icons/xred.png';
    }
  }
}

