import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rep-form',
  templateUrl: './rep-form.component.html',
  styleUrls: ['./rep-form.component.css']
})
export class RepFormComponent implements OnInit {

  @Input()
  repForm;


  modelsfull = [{id:  0, marca: 'Henry' , modelo: 'Prisma SF R01', senhacomunic: 0, loginpsw: 0, cpf: 0}, // vermelho
                {id:  1, marca: 'Henry' , modelo: 'Prisma SF R02', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id:  2, marca: 'Henry' , modelo: 'Prisma SF R03', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id:  3, marca: 'Henry' , modelo: 'Prisma SF R04', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id:  4, marca: 'Henry' , modelo: 'Prisma E', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id:  5, marca: 'Henry' , modelo: 'Prisma F', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id:  6, marca: 'Henry' , modelo: 'Prisma G', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id:  7, marca: 'Henry' , modelo: 'Prisma H', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id:  8, marca: 'Henry' , modelo: 'Prisma I', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id:  9, marca: 'Henry' , modelo: 'Prisma J', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 10, marca: 'Henry' , modelo: 'Prisma K', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 11, marca: 'Henry' , modelo: 'Hexa A', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 12, marca: 'Henry' , modelo: 'Hexa B', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 13, marca: 'Henry' , modelo: 'Hexa C', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 14, marca: 'Henry' , modelo: 'Hexa D', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 15, marca: 'Henry' , modelo: 'Hexa E', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 16, marca: 'Henry' , modelo: 'Hexa Adv A', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 17, marca: 'Henry' , modelo: 'Hexa Adv B', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 18, marca: 'Henry' , modelo: 'Hexa Adv C', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 19, marca: 'Henry' , modelo: 'Hexa Adv D', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 20, marca: 'Henry' , modelo: 'Hexa Adv E', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco e vermelho
                {id: 21, marca: 'Henry' , modelo: 'Prisma SF Adv R1', senhacomunic: 0, loginpsw: 0, cpf: 0}, // verde e vermelho
                {id: 22, marca: 'Henry' , modelo: 'Prisma SF Adv R2', senhacomunic: 0, loginpsw: 0, cpf: 0}, // verde e vermelho
                {id: 23, marca: 'Henry' , modelo: 'Prisma SF Adv R3', senhacomunic: 0, loginpsw: 0, cpf: 0}, // verde e vermelho
                {id: 24, marca: 'Henry' , modelo: 'Prisma SF Adv R4', senhacomunic: 0, loginpsw: 0, cpf: 0}, // verde e vermelho
                {id: 25, marca: 'Henry' , modelo: 'Prisma SF Adv R5', senhacomunic: 0, loginpsw: 0, cpf: 0}, // verde e vermelho
                {id: 26, marca: 'Henry' , modelo: 'Orion 6 A', senhacomunic: 0, loginpsw: 0, cpf: 0}, // vermelho
                {id: 27, marca: 'Henry' , modelo: 'Orion 6 B', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 28, marca: 'Henry' , modelo: 'Orion 6 C', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 29, marca: 'Henry' , modelo: 'Orion 6 D', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 30, marca: 'Henry' , modelo: 'Orion 6 D', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 31, marca: 'Proveu' , modelo: 'Kurumim Rep II', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 32, marca: 'Proveu' , modelo: 'Kurumim Rep II PX', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 33, marca: 'Proveu' , modelo: 'Kurumim Rep II Bio', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 34, marca: 'Proveu' , modelo: 'Kurumim Rep II Bio NT', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 35, marca: 'Proveu' , modelo: 'Kurumim Rep II Max', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 36, marca: 'Proveu' , modelo: 'Kurumim Rep III BR NT', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 37, marca: 'Proveu' , modelo: 'Kurumim Rep III PX NT', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 38, marca: 'Proveu' , modelo: 'Kurumim Rep III Bio NT', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 39, marca: 'Proveu' , modelo: 'Kurumim Rep III MAX BR NT', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 40, marca: 'Proveu' , modelo: 'Kurumim Rep III MAX PX NT', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 41, marca: 'Proveu' , modelo: 'Kurumim Rep III MAX BR PX NT', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 42, marca: 'Top Data' , modelo: 'Inner Rep Plus', senhacomunic: 0, loginpsw: 0, cpf: 0}, // branco
                {id: 43, marca: 'Zpm' , modelo: 'R100', senhacomunic: 0, loginpsw: 0, cpf: 0}, // azul
                {id: 44, marca: 'Zpm' , modelo: 'R130', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 45, marca: 'Zpm' , modelo: 'R300', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 46, marca: 'Zpm' , modelo: 'Eco 500', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 47, marca: 'RHJ' , modelo: 'Bio Print', senhacomunic: 0, loginpsw: 0, cpf: 0}, // vermelho
                {id: 48, marca: 'RHJ' , modelo: 'Bio Print Prox', senhacomunic: 0, loginpsw: 0, cpf: 0},
                {id: 49, marca: 'RWTech' , modelo: 'point line', senhacomunic: 0, loginpsw: 0, cpf: 0}, // vermelho
                {id: 50, marca: 'RWTech' , modelo: 'point line imetro', senhacomunic: 0, loginpsw: 0, cpf: 0}, // verde
                {id: 51, marca: 'Ctrl Id' , modelo: 'Eco 500', senhacomunic: 0, loginpsw: 0, cpf: 0} // vermelho
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
    const marca = this.modelsfull.filter( obj => obj[ 'marca' ].toLowerCase().match( value ) );
    const modelo = this.modelsfull.filter( obj => obj[ 'modelo' ].toLowerCase().match( value ) );
    Object.keys(marca).forEach(function(key) { modelo[key] = marca[key]; });
    this.marcamodelo = modelo;
    this.showmarcamodelo = true;
  }
  ClickitemMarcaModeloRep(value) {
    this.repForm.get('reps_marca').patchValue(value.marca);
    this.repForm.get('reps_modelo').patchValue(value.modelo);

    this.leitores = this.leitorfull.filter( obj => obj[ 'id' ] === value.id ) ;

    this.showmarcamodelo = false;
    this.showregister = false;
    this.showpswcomu = false;
    this.showusr = false;

    if (value.marca === 'Proveu') {
      this.showregister = true;
      this.showpswcomu = true;
    }
    if (value.marca === 'RHJ') {
      this.showpswcomu = true;
    }


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
