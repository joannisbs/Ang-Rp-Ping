

import { ChipService } from './../../../services/chip/chip.service';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetListUserInteface, sizeoflistofuserInterface } from '../../../models/user/user';
import { ListChipsInteface, ChipListRet, ChipdetailInterface } from 'src/app/models/chip/chip';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-listchip',
  templateUrl: './listchip.component.html',
  styleUrls: ['./listchip.component.css']
})
export class ListChipComponent implements OnInit {


  private subcription: Subscription;


  public tittle = "Lista de completa de chips";
  private Atittle = "Lista de completa de chips";
  private Btittle = "Lista de chips no estoque";
  private Ctittle = "Lista de chips em funcionamento";
  private Dtittle = "Lista de chips concedidos";

  public DropChoice = "Todos";
  public showDropDown = false;
  public desativos = false;

  public contage = 'none'

  public nextpage = false;
  public page = 1;
  public search = 'all';

  public arrayChip = [];
  public arrayDetals = [];

  public ctl_lixo = 0;
  public ctl_edit = 0;
  public ctl_acoes = 0;
  public ctl_campos = 0;
  public ctl_number = 0;
  public ctl_editar = 0;

  public showOptions = false;
  public button = "Vizualizar Chips desativos";
  public dbutton = "Vizualizar Chips ativos";

  private chiplistbanc = [];
  private valoripasalvar = '0';


  constructor(
    private chipservice: ChipService,
    private authService: AuthService,
  ) {
    this.GetList();
    const nivel = authService.GetNivel();
    if (nivel == '1' || nivel == '2' || nivel == '4') {
      this.showOptions = true;
    }
    else {
      this.showOptions = false;
    }
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }


  lixo(i) {
    this.ctl_lixo = i;
  }
  edit(i) {
    this.ctl_edit = i;
  }
  acoes(i) {
    this.ctl_acoes = i;
  }
  campos(i) {
    this.ctl_campos = i;
  }
  VerDesativos() {

    const ativo = this.button;
    this.button = this.dbutton;
    this.dbutton = ativo;
    this.desativos = !this.desativos;
    this.GetList();

  }
  ColocaOperadora(i, valor) {


    let op = '';
    if (valor.slice(0, 2) === '10') {

      if (valor.slice(2, 5) === '.26') {
        op = 'Vivo';
      } else if (valor.slice(2, 5) === '.50') {
        op = 'Oi';
      } else if (valor.slice(2, 6) === '.115') {
        op = 'Porto';
      }
    } else if (valor.slice(0, 6) === '172.40') {
      op = 'Claro';
    } else if (valor.slice(0, 4) === 'host') {
      op = '4G';
    } else { op = 'INVALID' }
    this.arrayChip[i][2] = op;
    this.valoripasalvar = valor;
    //this.arrayChip[i][1] = valor;

  }
  EditChip(i) {
    this.ctl_editar = i;
    console.log("AQUI", i)
  }

  Search(valor) {
    this.search = valor;
    this.GetList();
  }
  ShowDropEscolha() {
    this.showDropDown = true;
  }
  ClickDropChoice(valor) {
    this.DropChoice = valor;
    this.showDropDown = false;
    if (valor == "Todos") {
      this.tittle = this.Atittle;
    }
    else if (valor == "Estoque") {
      this.tittle = this.Btittle;
    }
    else if (valor == "Funcionamento") {
      this.tittle = this.Ctittle;
    }
    else if (valor == "Saídas") {
      this.tittle = this.Dtittle;
    }
    this.GetList();
  }

  PageNext(condicion) {
    if (condicion) {
      this.page++;
      this.GetList();
    }

  }

  PagePrevius(condicion) {
    if (condicion) {
      this.page--;
      this.GetList();
    }
  }
  montaArraychip(dado, detalhess) {

    for (let i = 0; i < dado.length; i++) {
      const chip: ChipListRet = dado[i];
      const detalhe: ChipdetailInterface = detalhess[i];
      const numChip = chip.chip_num;
      const ipchip = chip.chip_ip;
      let chipwhere = chip.chip_where;
      const operadora = chip.chip_oper;
      const chipsid = chip.id;
      if (chipwhere == 'e') {
        chipwhere = 'Estoque'
        this.ctl_number = 9999999;
      }
      const data = detalhe.one.slice(7, 9) + '/' +
        detalhe.one.slice(4, 6) + '/' +
        detalhe.one.slice(1, 3) + ' às ' + detalhe.one.slice(10, 15);
      this.arrayChip.push([numChip, ipchip, operadora, chipwhere, chipsid]);
      this.arrayDetals.push([data, detalhe.two, detalhe.three, '']);


    }
    this.chiplistbanc = dado;

  }
  montaContade(dado) {
    const sizeof: sizeoflistofuserInterface = dado;
    this.contage = String(Number(sizeof.initpag) + 1) + "-" +
      String(sizeof.endpag) + " de " + String(sizeof.size) + " registros";
    if (sizeof.endpag >= sizeof.size) {
      this.nextpage = true;
    } else {
      this.nextpage = false;
    }
  }
  GetList() {
    this.arrayChip = [];
    this.arrayDetals = [];
    let dadospagechip: ListChipsInteface = new ListChipsInteface;
    dadospagechip.categ = this.DropChoice;
    dadospagechip.page = String(this.page);
    dadospagechip.search = this.search;
    this.subcription = this.chipservice.listarChip(dadospagechip, this.desativos).subscribe(
      (response) => {

        const listChips = this.chipservice.Validate(response);
        this.montaContade(listChips[0]);
        this.montaArraychip(listChips[1], listChips[2]);
        this.subcription.unsubscribe();

      });
  }
  DeleteChip(valor) {
    let motivo = prompt("É necessário uma justificativa.");
    if (motivo != '') {
      const chipid: ChipListRet = this.chiplistbanc[valor];
      this.subcription = this.chipservice.DeletarrChip(chipid.id, motivo).subscribe(
        (response) => {
          const sucess = this.chipservice.Validate(response);


          if (sucess) {
            alert("O chip " + chipid.chip_num + " foi desativado!")
          }
          else {
            alert("Ocorreu um erro desconhecido!")
          }

          this.subcription.unsubscribe();

        });
    } else {
      alert("O chip não foi desativado, justificativa inválida.");
    }

  }
  ListHistori (result){
    console.log(result);
  }
  Saves(i) {
    let chipss: ChipListRet = new ChipListRet;
    chipss.chip_ip = this.valoripasalvar;
    //chipss.chip_ip = this.arrayChip[i][1];
    chipss.chip_oper = this.arrayChip[i][2];
    chipss.id = this.arrayChip[i][4];
    chipss.chip_num = this.arrayChip[i][0];
    console.log(chipss);
    if (chipss.chip_oper != 'INVALID') {

      let motivo = prompt("É necessário uma justificativa." );
      console.log(motivo);
      if (motivo != null) {
        if (motivo != '') {
          this.subcription = this.chipservice.EditChipIp(chipss, motivo).subscribe(
            (response) => {
              const sucess = this.chipservice.Validate(response);
  
              if (!sucess) {
  
                alert("Ocorreu um erro desconhecido!")
              }
              this.arrayChip[i][1] = this.valoripasalvar;
              this.subcription.unsubscribe();
              this.ctl_editar = 0;
            });
        } else {
          this.ColocaOperadora(i,this.arrayChip[i][1]);
          alert("O chip não foi salvo, justificativa inválida.");
        }
      }else {

        this.ColocaOperadora(i,this.arrayChip[i][1]);
        this.ctl_editar = 0;
      }
    }
  }
  AtiveChip(valor) {
    let motivo = prompt("É necessário uma justificativa.");
    if (motivo != '') {
      const chipid: ChipListRet = this.chiplistbanc[valor];
      this.subcription = this.chipservice.AtivarChip(chipid.id, motivo).subscribe(
        (response) => {
          const sucess = this.chipservice.Validate(response);

          if (sucess) {
            alert("O chip " + chipid.chip_num + " foi ativado!")
          }
          else {
            alert("Ocorreu um erro desconhecido!")
          }

          this.subcription.unsubscribe();

        });
    } else {
      alert("O chip não foi Reativado, justificativa inválida.");
    }
  }
}


