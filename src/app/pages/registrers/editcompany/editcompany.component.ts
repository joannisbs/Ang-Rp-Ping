import { EmpresaInteface } from './../../../models/company/company';
import { CepService } from './../../../services/cep/cep.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { companyFormGroup } from '../components/company-form/company.interface';
import { addressFormGroup } from '../components/address-form/address.interface';

import { CompanyService } from '../../../services/company/company.service';
import { Subscription } from 'rxjs';

import { ValidadeResponsesService } from 'src/app/services/validade_responses/validade-responses.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})


export class EditcompanyComponent implements OnInit {


  public formulario: FormGroup;
  public ocorreuSubmit = false;
  public showModal = false;
  private subcription: Subscription;

  private Subimitonetime = true;

  public company: EmpresaInteface;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private validate: ValidadeResponsesService,
    private cepService: CepService,
  ) { 
    this.company = this.companyService.getCompanytoEdit();
    
  }


  ngOnInit() {
    this.formulario = this.formBuilder.group({

      ...companyFormGroup,

      end_cep: ['',
        [Validators.required,
        Validators.maxLength(45),
        Validators.pattern('([0-9]{5}[-][0-9]{3})|([0-9]{8})')]],

      end_rua: ['',
        [Validators.required,
        Validators.maxLength(60)]],

      end_num: ['',
        [Validators.required,
        Validators.maxLength(6),
        Validators.pattern('[0-9]+')]],

      end_comp: ['',
        [Validators.maxLength(45)]],

      end_uf: ['',
        [Validators.required,
        Validators.maxLength(2),
        Validators.pattern('[A-Z]+')]],

      end_cidade: ['',
        [Validators.required,
        Validators.maxLength(45)]],

      end_bairro: ['',
        [Validators.required,
        Validators.maxLength(45)]],

      end_ref: ['',
        [Validators.required,
        Validators.maxLength(45)]],
      
      emp_nome: ['',
        [Validators.required,
        Validators.maxLength(12),
        Validators.pattern('[A-Z].*')]],

      empdata_cnpj: ['',
        [Validators.required,
        Validators.maxLength(18),
        // tslint:disable-next-line:max-line-length
        Validators.pattern('^([0-9]{2}[\.][0-9]{3}[\.][0-9]{3}[\/][0-9]{4}(-)[0-9]{2})$|'
          + '^[0-9]{14}$|'
          + '^([0-9]{3}[\.][0-9]{3}[\.][0-9]{3}(()|(-))[0-9]{2})$|'
          + '^([0-9]{11})$')]],

      empdata_resp: ['',
        [Validators.required,
        Validators.maxLength(45)]],

      empdata_razao: ['',
        [Validators.required,
        Validators.maxLength(90)]],

      empdata_email: ['',
        [Validators.required,
        Validators.maxLength(60),
        Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)]],

      empdata_tel: ['',
        [Validators.required,
        Validators.maxLength(14),
        Validators.pattern('[\(]?[0-9]{2}(( )|([\)])|()|(-))(([0-9]{4})|([0-9]{5}))(( )|(-)|)([0-9]{4})')]],

    });

  }

  ClearForm() {
    this.formulario.reset();
    this.showModal = false;
  }

  onSubmit(company, valido) {

    // caso Válido realisar metodo de envio
    if (valido) {

      if (this.Subimitonetime) {
        this.Subimitonetime = false;
        this.ocorreuSubmit = false;
        this.companyService
          .cadastrarCompany(company)
          .subscribe(respose => {
            const Secionsucess = this.validate.ValidateSeccion(respose[0]);
            if (Secionsucess) {
              const postSucess = this.validate.ValidateAction(respose[1]);
              if (postSucess == 1) {
                alert("A empresa foi salva com sucesso!");
                this.showModal = true;
                this.Subimitonetime = true;
                this.subcription.unsubscribe();
              } else if (postSucess == 2) {
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
  
  ngOnDestroy() {
    this.showModal = false;
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  showErrors(value) {
    return this.formulario.controls[ value ].valid || !(this.formulario.controls[ value].touched || this.ocorreuSubmit);
  }
  buscarCep(cep) {
    if (!cep) { return; }
    cep.replace('[-]', '');
    return this.subcription = this.cepService.consultaCep(cep)
      .subscribe(({ logradouro, localidade: cidade, uf, bairro, cep: cepCode }) => {
        this.formulario.get('end_cidade').patchValue(cidade);
        this.formulario.get('end_uf').patchValue(uf);
        this.formulario.get('end_rua').patchValue(logradouro);
        this.formulario.get('end_bairro').patchValue(bairro);
        this.formulario.get('end_cep').patchValue(cepCode);
      });
  }
}



