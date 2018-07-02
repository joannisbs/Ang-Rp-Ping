import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserComumFormGroup } from '../components/user-comum-form/user-comum.interface';

@Component({
  selector: 'app-newclientes',
  templateUrl: './newclientes.component.html',
  styleUrls: ['./newclientes.component.css']
})
export class NewclientesComponent implements OnInit {


  public formulario: FormGroup;
  public imagebutton = '/assets/icons/xred.png';
  public showimg = false;
  public forsub = false;
  public show = false;

  // tslint:disable-next-line:max-line-length
  public companysfull = [ { name: 'henry'} , {name: 'jaime'} , {name: 'carrocel'} , {name: 'Acre'} , {name: 'Alagoas'} , {name: 'Amapá'} , {name: 'Amazonas'} , {name: 'Bahia'} , {name: 'Ceará'} , {name: 'Distrito Federal'} , {name: 'Espírito Santo'} , {name: 'Goiás'} , {name: 'Maranhão'} , {name: 'Mato Grosso'} , {name: 'Mato Grosso do Sul'} , {name: 'Minas Gerais'} , {name: 'Pará'} , {name: 'Paraíba'} , {name: 'Paraná'} , {name: 'Pernambuco'} , {name: 'Piauí'} , {name: 'Rio de Janeiro'} , {name: 'Rio Grande do Norte'} , {name: 'Rio Grande do Sul'} , {name: 'Rondônia'} , {name: 'Roraima'} , {name: 'Santa Catarina'} , {name: 'São Paulo'} , {name: 'Sergipe'} , {name: 'Tocantins'} ];
  public companys = [];
  public ocorreuSubmit = false;

  constructor(
    private formBuilder: FormBuilder,
    // private companyService: CompanyService,
  ) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      ...UserComumFormGroup,

      emp_nome: ['',
      [Validators.required,
      Validators.maxLength(12)]]

    });
  }
  showErrors(value) {
    return this.formulario.controls[ value ].valid || !(this.formulario.controls[ value].touched || this.ocorreuSubmit);
  }
  ShowDrop(value) {
    this.companys = this.companysfull.filter( obj => obj[ 'name' ].match( value ) );
    this.show = true;
  }
  Clickitem(value) {
    this.formulario.get('emp_nome').patchValue(value);
    this.show = false;
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.ocorreuSubmit = true;
  }

}
