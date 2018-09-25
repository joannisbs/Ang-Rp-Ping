import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company/company.service';
import { StandartSearchList } from '../../../models/standartResponse/standartResponse';
import { Subscription } from 'rxjs';
import { ValidadeResponsesService } from 'src/app/services/validade_responses/validade-responses.service';
import { EmpresaInteface } from 'src/app/models/company/company';

@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.css']
})
export class ListcompanyComponent implements OnInit {

  constructor(
    private companyservice: CompanyService,
    private validate: ValidadeResponsesService,
  ) 
  { 
    this.GetList();
  }

  ngOnInit() {
  }

  private subcription: Subscription;
  
  public arrayEmpresas: EmpresaInteface[] = [];

  
  public pagina = 1;
  public nextpage = false;
  private search = 'all';
  private desativos = false;
  private listavazia = false;
  
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
          this.arrayEmpresas = response [ 2 ];

          console.log(this.arrayEmpresas);
          
        }else if( ListSucess == 2 ) {
          this.listavazia = true;
        }

      }

      this.subcription.unsubscribe();

   });
  }
}
