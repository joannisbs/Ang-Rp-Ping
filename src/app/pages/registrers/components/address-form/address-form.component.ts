import { CepService } from './../../../../services/cep/cep.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  @Input()
  addressForm;

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  buscarCep(cep) {
    this.cepService.consultaCep(cep);
  }
}
