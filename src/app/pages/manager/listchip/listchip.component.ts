

import { ChipService } from './../../../services/chip/chip.service';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetListUserInteface, sizeoflistofuserInterface } from '../../../models/user/user';
import { ListChipsInteface, ChipListRet, ChipdetailInterface } from 'src/app/models/chip/chip';
import { AuthService } from 'src/app/services/login/auth.service';
import * as jsPDF from 'jspdf';  

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

  public showModal = false;
  public showModalWhating = false;

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
    return 1;

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
    return 1;
  }

  async GetList() {
    this.arrayChip = [];
    this.arrayDetals = [];
    let dadospagechip: ListChipsInteface = new ListChipsInteface;
    dadospagechip.categ = this.DropChoice;
    dadospagechip.page = String(this.page);
    dadospagechip.search = this.search;
    this.subcription = this.chipservice.listarChip(dadospagechip, this.desativos).subscribe(
      (response) => this.GetListMontaarrays(response) );
  }

  async GetListMontaarrays(response) {
    const listChips = this.chipservice.Validate(response);
    let ret = null;
    ret = await this.montaContade(listChips[0]);
    ret = await this.montaArraychip(listChips[1], listChips[2]);
    this.subcription.unsubscribe();
  }

  
  geratePDF() {
    this.showModal = false;
    this.showModalWhating = true;

    let fill = this.search;
    if (fill == 'all') {
      fill = 'vazio';
    }

  

    var doc = new jsPDF('p', 'pt', 'a4');
    
    doc.setFontType("bold");
    doc.setFont('Console');
    doc.setFontSize(9);
    doc.setLineWidth(15)
    doc.text(30, 23, 'Lista de chips' +
    ' gerado com o filtro '+ fill +' contendo '+ this.contage + ' chips');
    

    let l = 0;
    for ( let i = 0; i< this.arrayChip.length; i++){
      
      if (l == 1) {
        l = 0;
        doc.setDrawColor(255, 255, 255);


      }else{
        l = 1;
        doc.setDrawColor(230, 230, 230);
      }

      let det1;
      let det2;

      if ( this.arrayChip[i][3] = 'Estoque' ) {
        det1 = 'Motivo:   '
        det2 = 'Resp: '
      } else if ( this.arrayChip[i][3] = 'Funcionamento' ) {
        det1 = 'Empresa:  '
        det2 = 'Relo: '
      } else if ( this.arrayChip[i][3] = 'saida' ) {
        det1 = 'Saida p/: '
        det2 = 'Resp: '
      } 

      let coord = 50 + 2*i*15;
      doc.line(20, coord, 560, coord);
      doc.line(20, coord + 2 , 560, coord + 2);

      let stringToPdf =  " Número: "   + this.arrayChip[i][0];

      doc.text(30, coord+3, stringToPdf);

      stringToPdf = " | Ip: " + this.arrayChip[i][1];

      doc.text(140, coord+3, stringToPdf);

      stringToPdf = " | Op: " + this.arrayChip[i][2];

      doc.text(370, coord+3, stringToPdf);

      stringToPdf = " | Sit: " + this.arrayChip[i][3];

      doc.text(450, coord+3, stringToPdf);      
      
      coord = 65 + 2*i*15;
      doc.line(20, coord  , 560, coord);

      stringToPdf = " Data: "  + this.arrayDetals[i][0]

      doc.text(30, coord+3, stringToPdf); 

      stringToPdf = " | " + det1 + this.arrayDetals[i][1]

      doc.text(140, coord+3, stringToPdf); 

      stringToPdf = " | " + det2 + this.arrayDetals[i][2]

      doc.text(370, coord+3, stringToPdf); 

    }
    doc.save("ListaChipParcial.pdf");
    this.showModalWhating = false;
  }

  async geratePDFComplete() {
    this.search = 'all';
    this.DropChoice = "Todos";
    this.showModal = false;
    this.showModalWhating = true;
    this.page = 1;
    var doc = new jsPDF('p', 'pt', 'a4');
    console.log(this.nextpage);
    while(!this.nextpage) {
      console.log(this.nextpage);
      
     
      
      this.GetList();
      await this.esperaGetList();

     if (this.page > 1) {
      await doc.addPage();
     }
      
      await doc.setFontType("bold");
      await doc.setFont('Console');
      await doc.setFontSize(9);
      await doc.setLineWidth(15);
      
      await this.criaPage(doc);
      this.page++;
    }
    
    doc.save("ListaChipCompleto.pdf");
      this.showModalWhating = false;

    

  }
  criaPage(doc){
    doc.text(30, 23, 'Lista completa de chips contendo '+ this.contage + ' chips');
      
      let l = 0;
      for ( let i = 0; i< this.arrayChip.length; i++){
        
        if (l == 1) {
          l = 0;
          doc.setDrawColor(255, 255, 255);
  
  
        }else{
          l = 1;
          doc.setDrawColor(230, 230, 230);
        }
  
        let det1;
        let det2;
  
        if ( this.arrayChip[i][3] = 'Estoque' ) {
          det1 = 'Motivo:   '
          det2 = 'Resp: '
        } else if ( this.arrayChip[i][3] = 'Funcionamento' ) {
          det1 = 'Empresa:  '
          det2 = 'Relo: '
        } else if ( this.arrayChip[i][3] = 'saida' ) {
          det1 = 'Saida p/: '
          det2 = 'Resp: '
        } 
  
        let coord = 50 + 2*i*15;
        doc.line(20, coord, 560, coord);
        doc.line(20, coord + 2 , 560, coord + 2);
  
        let stringToPdf =  " Número: "   + this.arrayChip[i][0];
  
        doc.text(30, coord+3, stringToPdf);
  
        stringToPdf = " | Ip: " + this.arrayChip[i][1];
  
        doc.text(140, coord+3, stringToPdf);
  
        stringToPdf = " | Op: " + this.arrayChip[i][2];
  
        doc.text(370, coord+3, stringToPdf);
  
        stringToPdf = " | Sit: " + this.arrayChip[i][3];
  
        doc.text(450, coord+3, stringToPdf);      
        
        coord = 65 + 2*i*15;
        doc.line(20, coord  , 560, coord);
  
        stringToPdf = " Data: "  + this.arrayDetals[i][0]
  
        doc.text(30, coord+3, stringToPdf); 
  
        stringToPdf = " | " + det1 + this.arrayDetals[i][1]
  
        doc.text(140, coord+3, stringToPdf); 
  
        stringToPdf = " | " + det2 + this.arrayDetals[i][2]
  
        doc.text(370, coord+3, stringToPdf); 
  
      }
      doc.text(275, 820, 'Pagina '+ this.page)
      


      this.arrayChip = [];
      
  }
  DeleteChip(valor) {
    let motivo = prompt("É necessário uma justificativa.");
    if (motivo.length > 20) {
      alert ("Sua justificativa é muito grande, utilizar no máximo 20 caracteres");
      motivo = prompt("Digite uma justificativa mais curta." );
    }
    if (motivo != '' && motivo != null) {
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

  async esperaGetList (){
    
    while(true) {
      try{
        let value = this.arrayChip[0][1];
        return 1;
      }
      catch{
        await this.sleep(1);
      }
    }
  }

sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  History (i){
    const ids = this.arrayChip[i][4];
    this.subcription.unsubscribe();
    this.chipservice.HistoryChip(ids);

  }
  Saves(i) {
    let chipss: ChipListRet = new ChipListRet;
    chipss.chip_ip = this.valoripasalvar;
    //chipss.chip_ip = this.arrayChip[i][1];
    chipss.chip_oper = this.arrayChip[i][2];
    chipss.id = this.arrayChip[i][4];
    chipss.chip_num = this.arrayChip[i][0];
   
    if (chipss.chip_oper != 'INVALID') {

      let motivo = prompt("É necessário uma justificativa." );
      if (motivo.length > 20) {
        alert ("Sua justificativa é muito grande, utilizar no máximo 20 caracteres");
        motivo = prompt("Digite uma justificativa mais curta." );
      }

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
  ShowModalGerar() {
    this.showModal = true;
  }
  AtiveChip(valor) {
    let motivo = prompt("É necessário uma justificativa.");
    if (motivo.length > 20) {
      alert ("Sua justificativa é muito grande, utilizar no máximo 20 caracteres");
      motivo = prompt("Digite uma justificativa mais curta." );
    }
    if (motivo != '' && motivo != null) {
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


