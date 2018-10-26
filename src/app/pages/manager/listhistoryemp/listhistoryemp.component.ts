import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import * as jsPDF from 'jspdf';  
import { ChipService } from '../../../services/chip/chip.service';
import { sizeoflistofuserInterface, historyoflistofhistorysInterface } from 'src/app/models/user/user';
import { ListChipHistoryInteface } from 'src/app/models/chip/chip';
import { CompanyService } from '../../../services/company/company.service';
import { StandartSearchList, StandartHistorie } from '../../../models/standartResponse/standartResponse';
import { ValidadeResponsesService } from 'src/app/services/validade_responses/validade-responses.service';

@Component({
  selector: 'app-listhistoryemp',
  templateUrl: './listhistoryemp.component.html',
  styleUrls: ['./listhistoryemp.component.css']
})
export class ListhistoryempComponent implements OnInit {
  private subcription: Subscription;



  public contage = ''

  public nextpage = true;
  
  private SearchObjList : StandartSearchList = new StandartSearchList;

  private reg;

  public arrayListHistoryEmpresas:StandartHistorie[] = [];
  
  public showModal = false;
  public showModalWhating = false;

  public listavzia = false;
  
  constructor( private empService: CompanyService,
    private validate: ValidadeResponsesService) { 
    this.SearchObjList.pagina = '1';
    this.SearchObjList.ObjIds = String(this.empService.GetCompanyId());
    this.SearchObjList.search =  "all";



    this.GetList();
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }


 
  SearchFunction(valor){
    if (valor == ''){
      this.SearchObjList.search='all';
    }
    else{
      this.SearchObjList.search = valor;
      this.SearchObjList.pagina = '1';
    }
    this.GetList();;
  }

  PageNext(condicion){
    if (condicion) {
      let value = Number(this.SearchObjList.pagina);
      value ++;
      this.SearchObjList.pagina = String( value ) ; 
      
      this.GetList();
    }

  }
  PagePrevius(condicion){
    if (condicion) {
      let value = Number(this.SearchObjList.pagina);
      value --;
      this.SearchObjList.pagina = String( value ) ; 
      
      this.GetList();
    }
  }

  // geratePDF(listas) {
  //   this.showModal = false;
  //   this.showModalWhating = true;
  //   const user = 'useer'//this.listhistoryusersService.getUSER();

  //   let fill = this.filter;
  //   if (fill == 'all') {
  //     fill = 'vazio';
  //   }


  //   var doc = new jsPDF('p', 'pt', 'a4');
    
  //   doc.setFontType("bold");
  //   doc.setFontSize(9);
  //   doc.setLineWidth(15)
  //   doc.text(30, 23, 'Histórico do usuário '+ user +
  //   ' gerado com o filtro '+ fill +' contendo '+ this.contage + ' registros');
    
  //   let l = 0;
  //   for ( let i = 0; i<listas.length; i++){
      
  //     if (l == 1) {
  //       l = 0;
  //       doc.setDrawColor(255, 255, 255);
  //     }else{
  //       l = 1;
  //       doc.setDrawColor(230, 230, 230);
  //     }
  //     const stringToPdf = listas[i][0] + ' -> ' +listas[i][1];
  //     const coord = 50 + i*15;
  //     doc.line(20, coord, 560, coord);
  //     doc.text(30, coord+3, stringToPdf);
  //   }
  //   doc.save("HistoricoParcial_"+ user +".pdf");
  //   this.showModalWhating = false;
  // }

  
  // async geratePDFCompleto() {
  //   this.showModal = false;
  //   this.showModalWhating = true;
  //   await this.GetList(1,"all");
  //   await this.sleep(1200);
  //   const user = 'user'//this.listhistoryusersService.getUSER();


  //   var doc = new jsPDF('p', 'pt', 'a4');
    
  //   doc.setFontType("bold");
  //   doc.setFontSize(9);
  //   doc.setLineWidth(15)
  //   doc.text(30, 23, 'Histórico do usuário '+ user +
  //   ' completo contendo '+ this.reg);
  //   let pag = 1;
  //   const maxofpages = 1+ (this.reg/50);
  //   while (pag < maxofpages) {
  //     await this.GetList(pag,"all");
  //     await this.sleep(1200);

       
  //       const listas = this.lists.slice(0);
  //       let l = 0;
  //       if (pag > 1){
  //         doc.addPage();
  //       }
       
  //       doc.setFontType("bold");
  //       doc.setFontSize(9);
  //       doc.setLineWidth(15)
  //     for ( let i = 0; i<listas.length; i++){
       
  //       if (l == 1) {
  //         l = 0;
  //         doc.setDrawColor(255, 255, 255);
  //       }else{
  //         l = 1;
  //         doc.setDrawColor(230, 230, 230);
  //       }
  //       const stringToPdf = listas[i][0] + '  --  ' +listas[i][1];
  //       const coord = 50 + i*15;
  //       doc.line(20, coord, 560, coord);
  //       doc.text(30, coord+3, stringToPdf);
  //     }
  //     doc.text(275, 820, 'Pagina '+ pag)
  //     pag = pag + 1;
      
  //   }
  //   doc.save("HistoricoCompleto_"+ user +".pdf");
  //   this.showModalWhating = false;
  //   await this.GetList(1,"all");
    
  // }


  ShowModalGerar()
  {
    this.showModal = true;
  }

  // GeraMesmaPagina() {
  //   this.geratePDF(this.lists);
  //   this.showModal = false;
  // }

  


  // sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  arrumaHora(valor){
    const data = valor.slice(7,9) + '/'+
        valor.slice(4,6) + '/'+
        valor.slice(1,3) + ' às ' + valor.slice(10,15) ;
        return data;
  }

  GetList() {


    this.arrayListHistoryEmpresas = [];
    this.listavzia = false;
  
    this.subcription = this.empService
    .ListHistoriesEmp ( this.SearchObjList )
    .subscribe ( ( response ) => {
      
      const Secionsucess = this.validate.ValidateSeccion( response [ 0 ] );
     
      if ( Secionsucess ){
        const ListSucess = this.validate.ValidateList   ( response [ 1 ] );
       
        if ( ListSucess == 1 ){
          const sizeof: sizeoflistofuserInterface = response [ 2 ];
       
          this.arrayListHistoryEmpresas = response [ 3 ];
         
          this.contage = String ( Number ( sizeof.initpag ) + 1 ) + "-" +
            String ( sizeof.endpag ) + " de " + String ( sizeof.size ) + " empresas";
            
          this.reg = sizeof.size;
         
          if ( sizeof.next === '1' ) {
            this.nextpage = true;
          }
          else {
            this.nextpage = false;
          }
         

        }else if( ListSucess == 2 ) {
          this.listavzia = true;
        }

      }

      this.subcription.unsubscribe();

   });
  }

  
}

