import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import * as jsPDF from 'jspdf';  
import { ChipService } from '../../../services/chip/chip.service';
import { sizeoflistofuserInterface, historyoflistofhistorysInterface } from 'src/app/models/user/user';
import { ListChipHistoryInteface } from 'src/app/models/chip/chip';
@Component({
  selector: 'app-listhistorychip',
  templateUrl: './listhistorychip.component.html',
  styleUrls: ['./listhistorychip.component.css']
})
export class ListhistorychipComponent implements OnInit {
  private subcription: Subscription;

  public lists = [];
  public ctl_lixo = 0;
  public ctl_edit = 0;
  public ctl_acoes = 0;

  public contage = ''

  public nextpage = true;
  public page = 1;
  public filter = "all";

  private reg;
  
  public showModal = false;
  public showModalWhating = false;
  constructor( private chipService: ChipService) { 
    this.GetList(1,"all");
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }

  // Controle da lixeira abrindo.
  lixo(i) {
    this.ctl_lixo = i;
  }
  edit(i) {
    this.ctl_edit = i;
  }
  acoes(i) {
    this.ctl_acoes= i;
  }

  formList(info) {

    const sizeof: sizeoflistofuserInterface = info[2];
    const registros = info[3];
    let evento: historyoflistofhistorysInterface;
    this.contage = String(Number(sizeof.initpag) + 1) + "-" +
            String(sizeof.endpag) + " de " + String(sizeof.size) + " registros";
    
    this.reg = String(sizeof.size);
    if (sizeof.next === '1') 
    {
      this.nextpage = true;
    }
    else 
    {
      this.nextpage = false;
    }
    let lista = [];
    for (let i = 0; i < registros.length; i++) {

      evento = registros[i];
      const data = evento.hora.slice(7,9) + '/'+
        evento.hora.slice(4,6) + '/'+
        evento.hora.slice(1,3) + ' às ' + evento.hora.slice(10,15) ;

        lista.push([data,evento.event]);
      

    }
    
    this.lists = lista;
    
  }


 
  Search(valor){
    if (valor == ''){
      this.filter='all';
    }
    else{
      this.filter=valor;
      this.page = 1;
    }
    this.GetList(this.page,this.filter);;
  }
  PageNext(condicion){
    if (condicion) {
      this.page++;
      this.GetList(this.page,this.filter);
    }

  }
  geratePDF(listas) {
    this.showModal = false;
    this.showModalWhating = true;
    const user = 'useer'//this.listhistoryusersService.getUSER();

    let fill = this.filter;
    if (fill == 'all') {
      fill = 'vazio';
    }


    var doc = new jsPDF('p', 'pt', 'a4');
    
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.setLineWidth(15)
    doc.text(30, 23, 'Histórico do usuário '+ user +
    ' gerado com o filtro '+ fill +' contendo '+ this.contage + ' registros');
    
    let l = 0;
    for ( let i = 0; i<listas.length; i++){
      
      if (l == 1) {
        l = 0;
        doc.setDrawColor(255, 255, 255);
      }else{
        l = 1;
        doc.setDrawColor(230, 230, 230);
      }
      const stringToPdf = listas[i][0] + ' -> ' +listas[i][1];
      const coord = 50 + i*15;
      doc.line(20, coord, 560, coord);
      doc.text(30, coord+3, stringToPdf);
    }
    doc.save("HistoricoParcial_"+ user +".pdf");
    this.showModalWhating = false;
  }

  
  async geratePDFCompleto() {
    this.showModal = false;
    this.showModalWhating = true;
    await this.GetList(1,"all");
    await this.sleep(1200);
    const user = 'user'//this.listhistoryusersService.getUSER();


    var doc = new jsPDF('p', 'pt', 'a4');
    
    doc.setFontType("bold");
    doc.setFontSize(9);
    doc.setLineWidth(15)
    doc.text(30, 23, 'Histórico do usuário '+ user +
    ' completo contendo '+ this.reg);
    let pag = 1;
    const maxofpages = 1+ (this.reg/50);
    while (pag < maxofpages) {
      await this.GetList(pag,"all");
      await this.sleep(1200);

       
        const listas = this.lists.slice(0);
        let l = 0;
        if (pag > 1){
          doc.addPage();
        }
       
        doc.setFontType("bold");
        doc.setFontSize(9);
        doc.setLineWidth(15)
      for ( let i = 0; i<listas.length; i++){
       
        if (l == 1) {
          l = 0;
          doc.setDrawColor(255, 255, 255);
        }else{
          l = 1;
          doc.setDrawColor(230, 230, 230);
        }
        const stringToPdf = listas[i][0] + '  --  ' +listas[i][1];
        const coord = 50 + i*15;
        doc.line(20, coord, 560, coord);
        doc.text(30, coord+3, stringToPdf);
      }
      doc.text(275, 820, 'Pagina '+ pag)
      pag = pag + 1;
      
    }
    doc.save("HistoricoCompleto_"+ user +".pdf");
    this.showModalWhating = false;
    await this.GetList(1,"all");
    
  }
  ShowModalGerar()
  {
    this.showModal = true;
  }
  GeraMesmaPagina() {
    this.geratePDF(this.lists);
    this.showModal = false;
  }

  

  PagePrevius(condicion){
    if (condicion) {
      this.page--;
      this.GetList(this.page,this.filter);
    }
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  GetList(pagina,filtro) {
    
    let dadosenvia: ListChipHistoryInteface = new ListChipHistoryInteface;
    dadosenvia.ids = this.chipService.GetChipid();
    dadosenvia.page = pagina;
    dadosenvia.search = filtro;

    this.lists = [];


    this.subcription = this.chipService.ListHistoryChip(dadosenvia).
    subscribe((response) => {
      const listusers = this.chipService.Validate(response);
      console.log(listusers);
      this.formList(listusers);
      this.subcription.unsubscribe();
      });
    

    
      
  } 

  
}
