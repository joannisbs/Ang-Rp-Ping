import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rep-form',
  templateUrl: './rep-form.component.html',
  styleUrls: ['./rep-form.component.css']
})
export class RepFormComponent implements OnInit {

  @Input()
  repForm;


  modelsfull = [{id:  0, marca: 'Henry' , modelo: 'Prisma SF R01'}, // vermelho
                {id:  1, marca: 'Henry' , modelo: 'Prisma SF R02'},
                {id:  2, marca: 'Henry' , modelo: 'Prisma SF R03'},
                {id:  3, marca: 'Henry' , modelo: 'Prisma SF R04'},
                {id:  4, marca: 'Henry' , modelo: 'Prisma E'},
                {id:  5, marca: 'Henry' , modelo: 'Prisma F'},
                {id:  6, marca: 'Henry' , modelo: 'Prisma G'},
                {id:  7, marca: 'Henry' , modelo: 'Prisma H'},
                {id:  8, marca: 'Henry' , modelo: 'Prisma I'},
                {id:  9, marca: 'Henry' , modelo: 'Prisma J'},
                {id: 10, marca: 'Henry' , modelo: 'Prisma K'},
                {id: 11, marca: 'Henry' , modelo: 'Hexa A'}, // branco e vermelho
                {id: 12, marca: 'Henry' , modelo: 'Hexa B'}, // branco e vermelho
                {id: 13, marca: 'Henry' , modelo: 'Hexa C'}, // branco e vermelho
                {id: 14, marca: 'Henry' , modelo: 'Hexa D'}, // branco e vermelho
                {id: 15, marca: 'Henry' , modelo: 'Hexa E'}, // branco e vermelho
                {id: 16, marca: 'Henry' , modelo: 'Hexa Adv A'}, // branco e vermelho
                {id: 17, marca: 'Henry' , modelo: 'Hexa Adv B'}, // branco e vermelho
                {id: 18, marca: 'Henry' , modelo: 'Hexa Adv C'}, // branco e vermelho
                {id: 19, marca: 'Henry' , modelo: 'Hexa Adv D'}, // branco e vermelho
                {id: 20, marca: 'Henry' , modelo: 'Hexa Adv E'}, // branco e vermelho
                {id: 21, marca: 'Henry' , modelo: 'Prisma SF Adv R1'}, // verde e vermelho
                {id: 22, marca: 'Henry' , modelo: 'Prisma SF Adv R2'}, // verde e vermelho
                {id: 23, marca: 'Henry' , modelo: 'Prisma SF Adv R3'}, // verde e vermelho
                {id: 24, marca: 'Henry' , modelo: 'Prisma SF Adv R4'}, // verde e vermelho
                {id: 25, marca: 'Henry' , modelo: 'Prisma SF Adv R5'}, // verde e vermelho
                {id: 26, marca: 'Henry' , modelo: 'Orion 6 A'}, // vermelho
                {id: 27, marca: 'Henry' , modelo: 'Orion 6 B'},
                {id: 28, marca: 'Henry' , modelo: 'Orion 6 C'},
                {id: 29, marca: 'Henry' , modelo: 'Orion 6 D'},
                {id: 30, marca: 'Henry' , modelo: 'Orion 6 D'},
                {id: 31, marca: 'Proveu' , modelo: 'Kurumim Rep II'},
                {id: 32, marca: 'Proveu' , modelo: 'Kurumim Rep II PX'},
                {id: 33, marca: 'Proveu' , modelo: 'Kurumim Rep II Bio'},
                {id: 34, marca: 'Proveu' , modelo: 'Kurumim Rep II Bio NT'},
                {id: 35, marca: 'Proveu' , modelo: 'Kurumim Rep II Max'},
                {id: 36, marca: 'Proveu' , modelo: 'Kurumim Rep III BR NT'},
                {id: 37, marca: 'Proveu' , modelo: 'Kurumim Rep III PX NT'},
                {id: 38, marca: 'Proveu' , modelo: 'Kurumim Rep III Bio NT'},
                {id: 39, marca: 'Proveu' , modelo: 'Kurumim Rep III MAX BR NT'},
                {id: 40, marca: 'Proveu' , modelo: 'Kurumim Rep III MAX PX NT'},
                {id: 41, marca: 'Proveu' , modelo: 'Kurumim Rep III MAX BR PX NT'},
                {id: 42, marca: 'Top Data' , modelo: 'Inner Rep Plus'}, // branco
                {id: 43, marca: 'Zpm' , modelo: 'R100'}, // azul
                {id: 44, marca: 'Zpm' , modelo: 'R130'},
                {id: 45, marca: 'Zpm' , modelo: 'R300'},
                {id: 46, marca: 'Zpm' , modelo: 'Eco 500'},
                {id: 47, marca: 'RHJ' , modelo: 'Bio Print'}, // vermelho
                {id: 48, marca: 'RHJ' , modelo: 'Bio Print Prox'},
                {id: 49, marca: 'RWTech' , modelo: 'point line'}, // vermelho
                {id: 50, marca: 'RWTech' , modelo: 'point line imetro'}, // verde
                {id: 51, marca: 'Ctrl Id' , modelo: 'Eco 500'}, // vermelho
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

  public show = false;
  public showmarcamodelo = false;
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
  }
}
