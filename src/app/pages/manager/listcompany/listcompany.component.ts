import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company/company.service';
import { StandartSearchList, StandartDelete } from '../../../models/standartResponse/standartResponse';
import { Subscription } from 'rxjs';
import { ValidadeResponsesService } from 'src/app/services/validade_responses/validade-responses.service';
import { EmpresaInteface } from 'src/app/models/company/company';
import { sizeoflistofuserInterface } from 'src/app/models/user/user';
import * as jsPDF from 'jspdf';  


@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.css']
})
export class ListcompanyComponent implements OnInit {

  constructor(
    private companyservice: CompanyService,
    private validate: ValidadeResponsesService ) { 
    
      this.GetList();
  }

  ngOnInit() {
  }

  private subcription: Subscription;
  
  public arrayEmpresas: EmpresaInteface[] = [];
  
  public ctrl_acoes  = 0;
  public ctrl_campos = 0;
  public ctrl_detail = 0;
  public ctrl_edit   = 0;
  public ctrl_lixo   = 0;
  

  public contage = 'zero';
  public pagina = 1;
  public nextpage = false;
  private search = 'all';
  private desativos = false;
  private listavazia = false;
  
  public tittle = 'Lista de Empresas';
  private dtittle = 'Lista de Empresas Desativadas';

  public showModal = false;
  public showModalWhating = false;

  public button = 'Ver Desativos';
  public dbutton = 'Ver Ativos';

  ActiveEmpresa( index ) {
    const excluir: StandartDelete = new StandartDelete;

    excluir.id      = this.arrayEmpresas[ index ].id
    excluir.motivo  = prompt( "É necessário uma justificativa." );

    if (excluir.motivo.length > 20) {
      alert ("Sua justificativa é muito grande, utilizar no máximo 20 caracteres");
      excluir.motivo = prompt("Digite uma justificativa mais curta." );
    }

    if ( excluir.motivo != null ) {
      if ( excluir.motivo != '' ) {

        this.subcription = this.companyservice
        .reativarCompany ( excluir ).subscribe ( ( response ) => {

          this.GetList();

          const Secionsucess = this.validate.ValidateSeccion( response [ 0 ] );
      
            if ( Secionsucess ){
              const ActionSucess = this.validate.ValidateAction   ( response [ 1 ] );
        
              if ( ActionSucess == 1 ){
                
                alert ( "A empresa foi excluída com sucesso." );
                
          
              }else if( ActionSucess == 2 ) {
                alert ( "A empresa não existe." );
              }
            }
          this.subcription.unsubscribe();
        });
      }else{
        alert ( "Justificativa inválida." );
      }
    }else {
      alert ( "Justificativa inválida." );

    }
    
  }

  deleteEmpresa( index ) {
    const excluir: StandartDelete = new StandartDelete;

    excluir.id      = this.arrayEmpresas[ index ].id
    excluir.motivo  = prompt( "É necessário uma justificativa." );
    
    if (excluir.motivo.length > 20) {
      alert ("Sua justificativa é muito grande, utilizar no máximo 20 caracteres");
      excluir.motivo = prompt("Digite uma justificativa mais curta." );
    }
   
    if ( excluir.motivo != null ) {
      if ( excluir.motivo != '' ) {
        
        this.subcription = this.companyservice
        .deletarCompany( excluir ).subscribe( ( response ) => {

          this.GetList();

          const Secionsucess = this.validate.ValidateSeccion( response [ 0 ] );
      
            if ( Secionsucess ){
              const ActionSucess = this.validate.ValidateAction   ( response [ 1 ] );
        
              if ( ActionSucess == 1 ){
                
                alert ( "A empresa foi excluída com sucesso." );
          
              }else if( ActionSucess == 2 ) {
                alert ( "A empresa não existe." );
              }
            }
          this.subcription.unsubscribe();
        });
      }else{
        alert ( "Justificativa inválida." );
      }
    }else {
      alert ( "Justificativa inválida." );

    }
    
  }
  
  editarCompany( index ) {
    const company = this.arrayEmpresas[index];
    this.companyservice.editarCompany ( company );
  }

  f_ctrl_acoes  ( i ) {
    this.ctrl_acoes = i;
  }

  f_ctrl_campos ( i ) {
    this.ctrl_campos = i;
  }
 
  f_ctrl_detail ( i ) {
    this.ctrl_detail = i;
  }
  
  f_ctrl_edit   ( i ) {
    this.ctrl_edit = i;
  }

  f_ctrl_lixo   ( i ) {
    this.ctrl_lixo = i;
  }

  GetList() {

    this.ctrl_acoes  = 0;
    this.ctrl_campos = 0;
    this.ctrl_detail = 0;
    this.ctrl_edit   = 0;
    this.ctrl_lixo   = 0;

    this.arrayEmpresas = [];
    this.listavazia = false;
    

    let search_Data: StandartSearchList = new StandartSearchList;
    
    search_Data.pagina   = String ( this.pagina );
    search_Data.search   = String ( this.search );

    this.subcription = this.companyservice
    .listarCompanys ( search_Data, this.desativos )
    .subscribe ( ( response ) => {

      const Secionsucess = this.validate.ValidateSeccion( response [ 0 ] );
      
      if ( Secionsucess ){
        const ListSucess = this.validate.ValidateList   ( response [ 1 ] );
        
        if ( ListSucess == 1 ){
          const sizeof: sizeoflistofuserInterface = response [ 2 ];

          this.arrayEmpresas = response [ 3 ];

          this.contage = String ( Number ( sizeof.initpag ) + 1 ) + "-" +
            String ( sizeof.endpag ) + " de " + String ( sizeof.size ) + " empresas";


          if ( sizeof.next === '1' ) {
            this.nextpage = true;
          }
          else {
            this.nextpage = false;
          }
         

          
          
        }else if( ListSucess == 2 ) {
          this.listavazia = true;
        }

      }

      this.subcription.unsubscribe();

   });
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
    doc.setFont('Times');
    doc.setFontSize(9);
    doc.setLineWidth(15)
    doc.text(20, 23, 'Lista de chips' +
    ' gerado com o filtro '+ fill +' contendo '+ this.contage);
    

    let l = 0;
    for ( let i = 0; i< this.arrayEmpresas.length; i++){
      
      if (l == 1) {
        l = 0;
        doc.setDrawColor(255, 255, 255);


      }else{
        l = 1;
        doc.setDrawColor(210, 210, 210);
      }


      let coord = 40 + 4*i*15;
      doc.line(15, coord, 580, coord);
      doc.line(15, coord + 2 , 580, coord + 2);

      let stringToPdf =  " Nome: "   + this.arrayEmpresas[i].emp_nome;

      doc.text(20, coord+3, stringToPdf);

      stringToPdf = " | Cnpj: " + this.arrayEmpresas[i].empdata_cnpj;

      doc.text(130, coord+3, stringToPdf);

      stringToPdf = " | Razao: " + this.arrayEmpresas[i].empdata_razao;

      doc.text(235, coord+3, stringToPdf);

      stringToPdf = " | Total: " + this.arrayEmpresas[i].cont_Tot + " relógios";

      doc.text(480, coord+3, stringToPdf);      
      
      coord = 55 + 4*i*15;
      doc.line(15, coord  , 580, coord);
      doc.line(15, coord + 2 , 580, coord + 2);

      stringToPdf = " Resp: "  + this.arrayEmpresas[i].empdata_resp;

      doc.text(20, coord+3, stringToPdf); 

      stringToPdf = " | Tel: "  + this.arrayEmpresas[i].empdata_tel;

      doc.text(130, coord+3, stringToPdf); 

      stringToPdf = " | Email: " + this.arrayEmpresas[i].empdata_email;
      doc.text(235, coord+3, stringToPdf); 
      
      stringToPdf = " | Cep: "  + this.arrayEmpresas[i].end_cep;
      doc.text(480, coord+3, stringToPdf); 
      
      coord = 70 + 4*i*15;
      doc.line(15, coord  , 580, coord);
      doc.line(15, coord + 2 , 580, coord + 2);

      stringToPdf = " Bairro: "  + this.arrayEmpresas[i].end_bairro;

      doc.text(20, coord+3, stringToPdf); 
     
    
      //doc.text(110, coord+3, stringToPdf); 
     
      stringToPdf = " | P.Ref: " + this.arrayEmpresas[i].end_ref;

      doc.text(235, coord+3, stringToPdf); 

      stringToPdf = " | Comp: " + this.arrayEmpresas[i].end_comp;

      doc.text(480, coord+3, stringToPdf);    

      coord = 85 + 4*i*15;
      doc.line(15, coord  , 580, coord);

      
      stringToPdf = " Cid-UF: "  + this.arrayEmpresas[i].end_cidade + '-' + this.arrayEmpresas[i].end_uf;

      doc.text(20, coord+3, stringToPdf); 

     

      // doc.text(130, coord+3, stringToPdf); 
     
      stringToPdf = " | Rua: " + this.arrayEmpresas[i].end_rua;
      doc.text(235, coord+3, stringToPdf); 

      stringToPdf = " | Nº: " + this.arrayEmpresas[i].end_num;

      doc.text(480, coord+3, stringToPdf); 

      
    }
    doc.text(275, 825, 'Página 1');
    doc.save("ListaEmpresaParcial.pdf");
    this.showModalWhating = false;
  }

  // async geratePDFComplete() {
  //   this.search = 'all';
  //   this.DropChoice = "Todos";
  //   this.showModal = false;
  //   this.showModalWhating = true;
  //   this.page = 1;
  //   var doc = new jsPDF('p', 'pt', 'a4');
  //   console.log(this.nextpage);
  //   while(!this.nextpage) {
  //     console.log(this.nextpage);
      
     
      
  //     this.GetList();
  //     await this.esperaGetList();

  //    if (this.page > 1) {
  //     await doc.addPage();
  //    }
      
  //     await doc.setFontType("bold");
  //     await doc.setFont('Console');
  //     await doc.setFontSize(9);
  //     await doc.setLineWidth(15);
      
  //     await this.criaPage(doc);
  //     this.page++;
  //   }
    
  //   doc.save("ListaChipCompleto.pdf");
  //     this.showModalWhating = false;

    

  // }
  // criaPage(doc){
  //   doc.text(20, 23, 'Lista completa de chips contendo '+ this.contage + ' chips');
      
  //     let l = 0;
  //     for ( let i = 0; i< this.arrayEmpresas.length; i++){
        
  //       if (l == 1) {
  //         l = 0;
  //         doc.setDrawColor(255, 255, 255);
  
  
  //       }else{
  //         l = 1;
  //         doc.setDrawColor(230, 230, 230);
  //       }
  
  //       let det1;
  //       let det2;
  
  //       if ( this.arrayEmpresas[i][3] = 'Estoque' ) {
  //         det1 = 'Motivo:   '
  //         det2 = 'Resp: '
  //       } else if ( this.arrayEmpresas[i][3] = 'Funcionamento' ) {
  //         det1 = 'Empresa:  '
  //         det2 = 'Relo: '
  //       } else if ( this.arrayEmpresas[i][3] = 'saida' ) {
  //         det1 = 'Saida p/: '
  //         det2 = 'Resp: '
  //       } 
  
  //       let coord = 50 + 2*i*15;
  //       doc.line(15, coord, 580, coord);
  //       doc.line(15, coord + 2 , 580, coord + 2);
  
  //       let stringToPdf =  " Número: "   + this.arrayEmpresas[i][0];
  
  //       doc.text(20, coord+3, stringToPdf);
  
  //       stringToPdf = " | Ip: " + this.arrayEmpresas[i][1];
  
  //       doc.text(130, coord+3, stringToPdf);
  
  //       stringToPdf = " | Op: " + this.arrayEmpresas[i][2];
  
  //       doc.text(370, coord+3, stringToPdf);
  
  //       stringToPdf = " | Sit: " + this.arrayEmpresas[i][3];
  
  //       doc.text(450, coord+3, stringToPdf);      
        
  //       coord = 65 + 2*i*15;
  //       doc.line(15, coord  , 580, coord);
  
  //       stringToPdf = " Data: "  + this.arrayDetals[i][0]
  
  //       doc.text(20, coord+3, stringToPdf); 
  
  //       stringToPdf = " | " + det1 + this.arrayDetals[i][1]
  
  //       doc.text(130, coord+3, stringToPdf); 
  
  //       stringToPdf = " | " + det2 + this.arrayDetals[i][2]
  
  //       doc.text(370, coord+3, stringToPdf); 
  
  //     }
  //     doc.text(275, 820, 'Pagina '+ this.page)
      


  //     this.arrayEmpresas = [];
      
  // }

  ListarHistory(index){
    const ids     = this.arrayEmpresas[ index ].id;
    this.subcription.unsubscribe();
    this.companyservice.HistoryEmp(ids);
  }

  PageNext ( condicion ) {
    if ( condicion ) {
      this.pagina++;
      this.GetList();
    }

  }

  PagePrevius ( condicion ) {
    if ( condicion ) {
      this.pagina--;
      this.GetList();
    }
  }

  Search ( item ) {
    this.search = item;
    this.GetList();
  }

  VerDesativos(){
    let aux = this.button;
    this.button = this.dbutton;
    this.dbutton = aux;

    aux = this.tittle;
    this.tittle = this.dtittle;
    this.dtittle = aux;
    

    this.desativos = !this.desativos;
    this.GetList();

  }
}



