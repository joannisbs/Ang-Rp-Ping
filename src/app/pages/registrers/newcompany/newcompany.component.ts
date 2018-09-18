import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { companyFormGroup } from '../components/company-form/company.interface';
import { addressFormGroup } from '../components/address-form/address.interface';

import { CompanyService } from '../../../services/company/company.service';
import { Subscription } from 'rxjs';

import { playAudioError } from '../../../generic/funcoes-genericas/soundfunctions/soundError';

@Component({
  selector: 'app-newcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewcompanyComponent implements OnInit, OnDestroy {

  public formulario: FormGroup;
  public ocorreuSubmit = false;
  public showModal = false;
  private subcription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
  ) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group ({

        ...companyFormGroup,
        ...addressFormGroup,

    });

  }
  ClearForm() {
    this.formulario.reset();
    this.showModal = false;
  }
  onSubmit(company, valido) {

    // caso Válido realisar metodo de envio
    if (valido) {

     
      this.ocorreuSubmit = false;
      this.companyService
      .cadastrarCompany(company)
      .subscribe(res => {
       
        this.showModal = true;
      }
      );

    } else {
      // Variavel que da o feedback do botão precionado para os componets do form
      this.ocorreuSubmit = true;
      playAudioError();
      scrollTo(0, 0);

    }

}
  ngOnDestroy () {
    this.showModal = false;
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}


