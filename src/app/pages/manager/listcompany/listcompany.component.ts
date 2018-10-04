import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company/company.service';
import { StandartSearchList, StandartDelete } from '../../../models/standartResponse/standartResponse';
import { Subscription } from 'rxjs';
import { ValidadeResponsesService } from 'src/app/services/validade_responses/validade-responses.service';
import { EmpresaInteface } from 'src/app/models/company/company';
import { sizeoflistofuserInterface } from 'src/app/models/user/user';

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



