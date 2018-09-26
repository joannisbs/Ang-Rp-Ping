import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company/company.service';
import { StandartSearchList } from '../../../models/standartResponse/standartResponse';
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

  f_ctrl_acoes  ( i ) {
    this.ctrl_acoes = i;
  }

  f_ctrl_campos ( i ) {
    this.ctrl_campos = i;
  }
 
  f_ctrl_detail ( i ) {
    this.ctrl_edit = i;
  }
  
  f_ctrl_edit   ( i ) {
    this.ctrl_edit = i;
  }

  f_ctrl_lixo   ( i ) {
    this.ctrl_lixo = i;
  }

  GetList() {

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
          console.log(this.contage);
          console.log("problema");
          console.log(this.arrayEmpresas);

          
          
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

  Search(item) {
    console.log(item);
  }
}



