import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rep-form',
  templateUrl: './rep-form.component.html',
  styleUrls: ['./rep-form.component.css']
})
export class RepFormComponent implements OnInit {

  @Input()
  repForm;

  @Input()
  ocorreuSubmit;

  modelsfull = [{id:  0, reps_marca: 'Henry' , reps_modelo: 'Prisma SF R01', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  1, reps_marca: 'Henry' , reps_modelo: 'Prisma SF R02', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  2, reps_marca: 'Henry' , reps_modelo: 'Prisma SF R03', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  3, reps_marca: 'Henry' , reps_modelo: 'Prisma SF R04', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  4, reps_marca: 'Henry' , reps_modelo: 'Prisma E', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  5, reps_marca: 'Henry' , reps_modelo: 'Prisma F', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  6, reps_marca: 'Henry' , reps_modelo: 'Prisma G', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  7, reps_marca: 'Henry' , reps_modelo: 'Prisma H', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  8, reps_marca: 'Henry' , reps_modelo: 'Prisma I', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id:  9, reps_marca: 'Henry' , reps_modelo: 'Prisma J', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id: 10, reps_marca: 'Henry' , reps_modelo: 'Prisma K', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id: 11, reps_marca: 'Henry' , reps_modelo: 'Hexa A', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id: 12, reps_marca: 'Henry' , reps_modelo: 'Hexa B', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id: 13, reps_marca: 'Henry' , reps_modelo: 'Hexa C', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id: 14, reps_marca: 'Henry' , reps_modelo: 'Hexa D', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id: 15, reps_marca: 'Henry' , reps_modelo: 'Hexa E', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 0},
                {id: 16, reps_marca: 'Henry' , reps_modelo: 'Hexa Adv A', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 17, reps_marca: 'Henry' , reps_modelo: 'Hexa Adv B', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 18, reps_marca: 'Henry' , reps_modelo: 'Hexa Adv C', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 19, reps_marca: 'Henry' , reps_modelo: 'Hexa Adv D', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 20, reps_marca: 'Henry' , reps_modelo: 'Hexa Adv E', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 21, reps_marca: 'Henry' , reps_modelo: 'Prisma SF Adv R1', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 22, reps_marca: 'Henry' , reps_modelo: 'Prisma SF Adv R2', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 23, reps_marca: 'Henry' , reps_modelo: 'Prisma SF Adv R3', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 24, reps_marca: 'Henry' , reps_modelo: 'Prisma SF Adv R4', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 25, reps_marca: 'Henry' , reps_modelo: 'Prisma SF Adv R5', senhacomunic: 0, loginpsw: 1, chave: 0, cpf: 1},
                {id: 26, reps_marca: 'Henry' , reps_modelo: 'Orion 6 A', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 27, reps_marca: 'Henry' , reps_modelo: 'Orion 6 B', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 28, reps_marca: 'Henry' , reps_modelo: 'Orion 6 C', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 29, reps_marca: 'Henry' , reps_modelo: 'Orion 6 D', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 30, reps_marca: 'Henry' , reps_modelo: 'Orion 6 D', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 32, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep II PX', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 33, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep II Bio', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 34, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep II Bio NT', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 35, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep II Max', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 36, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep III BR NT', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 37, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep III PX NT', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 38, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep III Bio NT', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 39, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep III MAX BR NT', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 40, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep III MAX PX NT', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},

                // tslint:disable-next-line:max-line-length
                {id: 41, reps_marca: 'Proveu' , reps_modelo: 'Kurumim Rep III MAX BR PX NT', senhacomunic: 1, loginpsw: 0, chave: 1, cpf: 0},
                {id: 42, reps_marca: 'Top Data' , reps_modelo: 'Inner Rep Plus', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 43, reps_marca: 'Zpm' , reps_modelo: 'R100', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 44, reps_marca: 'Zpm' , reps_modelo: 'R130', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 45, reps_marca: 'Zpm' , reps_modelo: 'R300', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 46, reps_marca: 'Zpm' , reps_modelo: 'Eco 500', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 47, reps_marca: 'RHJ' , reps_modelo: 'Bio Print', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 48, reps_marca: 'RHJ' , reps_modelo: 'Bio Print Prox', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 49, reps_marca: 'RWTech' , reps_modelo: 'point line', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 50, reps_marca: 'RWTech' , reps_modelo: 'point line imetro', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0},
                {id: 51, reps_marca: 'Ctrl Id' , reps_modelo: 'Eco 500', senhacomunic: 0, loginpsw: 0, chave: 0, cpf: 0}
              ];
leitorfull = [{id:  0, leitor: 'vermelho'},
              {id:  1, leitor: 'vermelho'},
              {id:  2, leitor: 'vermelho'},
              {id:  3, leitor: 'vermelho'},
              {id:  4, leitor: 'vermelho'},
              {id:  5, leitor: 'vermelho'},
              {id:  6, leitor: 'vermelho'},
              {id:  7, leitor: 'vermelho'},
              {id:  8, leitor: 'vermelho'},
              {id:  9, leitor: 'vermelho'},
              {id: 10, leitor: 'vermelho'},
              {id: 11, leitor: 'branco'},
              {id: 11, leitor: 'vermelho'},
              {id: 12, leitor: 'branco'},
              {id: 12, leitor: 'vermelho'},
              {id: 13, leitor: 'branco'},
              {id: 13, leitor: 'vermelho'},
              {id: 14, leitor: 'branco'},
              {id: 14, leitor: 'vermelho'},
              {id: 15, leitor: 'branco'},
              {id: 15, leitor: 'vermelho'},
              {id: 16, leitor: 'branco'},
              {id: 16, leitor: 'vermelho'},
              {id: 17, leitor: 'branco'},
              {id: 17, leitor: 'vermelho'},
              {id: 18, leitor: 'branco'},
              {id: 18, leitor: 'vermelho'},
              {id: 19, leitor: 'branco'},
              {id: 19, leitor: 'vermelho'},
              {id: 20, leitor: 'branco'},
              {id: 20, leitor: 'vermelho'},
              {id: 21, leitor: 'verde'},
              {id: 21, leitor: 'vermelho'},
              {id: 22, leitor: 'verde'},
              {id: 22, leitor: 'vermelho'},
              {id: 23, leitor: 'verde'},
              {id: 23, leitor: 'vermelho'},
              {id: 24, leitor: 'verde'},
              {id: 24, leitor: 'vermelho'},
              {id: 25, leitor: 'verde'},
              {id: 25, leitor: 'vermelho'},
              {id: 26, leitor: 'vermelho'},
              {id: 27, leitor: 'vermelho'},
              {id: 28, leitor: 'vermelho'},
              {id: 29, leitor: 'vermelho'},
              {id: 30, leitor: 'vermelho'},
              {id: 31, leitor: 'vermelho'},
              {id: 32, leitor: 'vermelho'},
              {id: 33, leitor: 'vermelho'},
              {id: 34, leitor: 'vermelho'},
              {id: 35, leitor: 'vermelho'},
              {id: 36, leitor: 'vermelho'},
              {id: 37, leitor: 'vermelho'},
              {id: 38, leitor: 'vermelho'},
              {id: 39, leitor: 'vermelho'},
              {id: 40, leitor: 'vermelho'},
              {id: 41, leitor: 'vermelho'},
              {id: 42, leitor: 'branco'},
              {id: 43, leitor: 'azul'},
              {id: 44, leitor: 'azul'},
              {id: 45, leitor: 'azul'},
              {id: 46, leitor: 'azul'},
              {id: 47, leitor: 'branco'},
              {id: 48, leitor: 'vermelho'},
              {id: 49, leitor: 'vermelho'},
              {id: 50, leitor: 'verde'},
              {id: 51, leitor: 'vermelho'},
            ];


  // tslint:disable-next-line:max-line-length
  public companysfull = [ { name: 'henry'} , {name: 'jaime'} , {name: 'carrocel'} , {name: 'Acre'} , {name: 'Alagoas'} , {name: 'Amapá'} , {name: 'Amazonas'} , {name: 'Bahia'} , {name: 'Ceará'} , {name: 'Distrito Federal'} , {name: 'Espírito Santo'} , {name: 'Goiás'} , {name: 'Maranhão'} , {name: 'Mato Grosso'} , {name: 'Mato Grosso do Sul'} , {name: 'Minas Gerais'} , {name: 'Pará'} , {name: 'Paraíba'} , {name: 'Paraná'} , {name: 'Pernambuco'} , {name: 'Piauí'} , {name: 'Rio de Janeiro'} , {name: 'Rio Grande do Norte'} , {name: 'Rio Grande do Sul'} , {name: 'Rondônia'} , {name: 'Roraima'} , {name: 'Santa Catarina'} , {name: 'São Paulo'} , {name: 'Sergipe'} , {name: 'Tocantins'} ];
  public companys = [];
  public marcamodelo = [];
  public leitores = [];

  public showpswcomu = false;
  public show = false;
  public showregister = false;
  public showmarcamodelo = false;
  public showusr = false;
  public showcpf = false;
  constructor() { }

  ngOnInit() { }
  ShowDrop(value) {
    this.companys = this.companysfull.filter( obj => obj[ 'name' ].match( value ) );
    this.show = true;
  }
  Clickitem(value) {
    this.repForm.get('emp_nome').patchValue(value);
    this.show = false;
  }

  ShowDShowDropMarcaModelrep(value) {
    const marca = this.modelsfull.filter( obj => obj[ 'reps_marca' ].toLowerCase().match( value ) );
    const modelo = this.modelsfull.filter( obj => obj[ 'reps_modelo' ].toLowerCase().match( value ) );
    Object.keys(marca).forEach(function(key) { modelo[key] = marca[key]; });
    this.marcamodelo = modelo;
    this.showmarcamodelo = true;
  }
  ClickitemMarcaModeloRep(value) {
    this.repForm.get('reps_marca').patchValue(value.reps_marca);
    this.repForm.get('reps_modelo').patchValue(value.reps_modelo);

    this.leitores = this.leitorfull.filter( obj => obj[ 'id' ] === value.id ) ;

    this.showmarcamodelo = false;
    this.showregister = false;
    this.showpswcomu = false;
    this.showusr = false;
    this.showcpf = false;

    if (value.chave === 1) {
      this.showregister = true;
    }
    if (value.senhacomunic === 1) {
      this.showpswcomu = true;
    }
    if (value.loginpsw === 1) {
      this.showusr = true;
    }
    if (value.cpf === 1) {
      this.showcpf = true;
    }


  }
  showErrors(value) {
    return this.repForm.controls[ value ].valid || !(this.repForm.controls[ value].touched || this.ocorreuSubmit);
  }
  arrumaCNPJ(cpf_cnpj) {
    cpf_cnpj = cpf_cnpj.replace(/\./g , '');
    cpf_cnpj = cpf_cnpj.replace('\-', '');
    cpf_cnpj = cpf_cnpj.replace('\/', '');
    console.log(cpf_cnpj);
    if (cpf_cnpj.length === 11) {
      let cpf = cpf_cnpj.substring(0, 3);
      cpf = cpf + '.';
      cpf = cpf + cpf_cnpj.substring(3, 6);
      cpf = cpf + '.';
      cpf = cpf + cpf_cnpj.substring(6, 9);
      cpf = cpf + '-';
      cpf = cpf + cpf_cnpj.substring(9, 11);
      this.repForm.get('repdata_cnpjcompra').patchValue(cpf);
    }
    if (cpf_cnpj.length === 14) {
      let cnpj = cpf_cnpj.substring(0, 2);
      cnpj = cnpj + '.';
      cnpj = cnpj + cpf_cnpj.substring(2, 5);
      cnpj = cnpj + '.';
      cnpj = cnpj + cpf_cnpj.substring(5, 8);
      cnpj = cnpj + '/';
      cnpj = cnpj + cpf_cnpj.substring(8, 12);
      cnpj = cnpj + '-';
      cnpj = cnpj + cpf_cnpj.substring(12, 14);
      this.repForm.get('repdata_cnpjcompra').patchValue(cnpj);
    }
  }
}
