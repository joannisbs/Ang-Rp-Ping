import { CepService } from './../../../../services/cep/cep.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit, OnDestroy {

  @Input()
  addressForm: FormGroup;

  private subcription: Subscription;

  constructor(private cepService: CepService) { }

  ngOnInit() { }

  buscarCep(cep) {
    if (!cep) { return; }
    cep.replace('[-]', '');
    return this.subcription = this.cepService.consultaCep(cep)
      .subscribe(({ logradouro, localidade: cidade, uf, bairro, cep: cepCode }) => {
        this.addressForm.get('end_cidade').patchValue(cidade);
        this.addressForm.get('end_uf').patchValue(uf);
        this.addressForm.get('end_rua').patchValue(logradouro);
        this.addressForm.get('end_bairro').patchValue(bairro);
        this.addressForm.get('end_cep').patchValue(cepCode);
      });
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}
