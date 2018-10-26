import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { companyFormGroup } from '../components/company-form/company.interface';
import { addressFormGroup } from '../components/address-form/address.interface';

import { CompanyService } from '../../../services/company/company.service';
import { Subscription } from 'rxjs';

import { ValidadeResponsesService } from 'src/app/services/validade_responses/validade-responses.service';


@Component({
  selector: 'app-newcompany',
  templateUrl: './newcompany.component.html',
  styleUrls: ['./newcompany.component.css']
})
export class NewcompanyComponent implements OnInit, OnDestroy {

  public formulario: FormGroup;
  public ocorreuSubmit = false;
  public showModal = false;
  public showModalWhating = false;
  private subcription: Subscription;

  private Subimitonetime = true;
 
  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private validate: ValidadeResponsesService,
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
      this.showModalWhating = true;

      if ( this.Subimitonetime ) {
        this.Subimitonetime = false;
        this.ocorreuSubmit = false;
        this.companyService
        .cadastrarCompany(company)
        .subscribe(respose => {
          const Secionsucess = this.validate.ValidateSeccion(respose[0]);
          if (Secionsucess){
            const postSucess = this.validate.ValidateAction(respose[1]);
            if (postSucess == 1){
              this.showModalWhating = false;
              alert("A empresa foi salva com sucesso!");
              this.showModal = true;
              this.Subimitonetime = true;
              this.subcription.unsubscribe();
            }else if (postSucess == 2){
              this.showModalWhating = false;
              alert("A empresa já existe no banco de dados.")
            }
          }
          this.Subimitonetime = true;
        }
        );
      }



    } else {
      // Variavel que da o feedback do botão precionado para os componets do form
      this.ocorreuSubmit = true;
      //playAudioError();
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


