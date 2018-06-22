import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  @Input()
  addressForm;

  constructor() { }

  ngOnInit() {
  }

}
