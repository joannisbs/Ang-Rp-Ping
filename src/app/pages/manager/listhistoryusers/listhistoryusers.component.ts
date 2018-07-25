import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ListhistoryUsersService } from 'src/app/services/user/listhystoryusers.service';

@Component({
  selector: 'app-listhistoryusers',
  templateUrl: './listhistoryusers.component.html',
  styleUrls: ['./listhistoryusers.component.css']
})
export class ListhistoryusersComponent implements OnInit {

  private subcription: Subscription;

  public lists = [];
  public lista = [];
  public ctl_lixo = 0;
  public ctl_edit = 0;
  public ctl_acoes = 0;

  public contage = ''

  public nextpage = false;
  public page = 1;
  public filter = "all";

  constructor( private listhistoryusersService: ListhistoryUsersService) { 
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
    this.contage = String(info[0][0]) + "-" + 
                    String(info[0][1]) + " de " + String(info[0][2]) + " registros";
    if (info[0][3]==='1') {
      this.nextpage = true;
    }
    else {
      this.nextpage = false;
    }

    this.lists = info.slice(1);

    for (let i=0; i< this.lists.length; i++) {
      const data = this.lists[i][1].slice(7,9) + '/'+
        this.lists[i][1].slice(4,6) + '/'+
        this.lists[i][1].slice(1,3) + ' às ' + this.lists[i][1].slice(10,15) ;
      this.lists[i][1]=data
    }

  }
 
  Search(valor){
    if (valor == ''){
      this.filter='all';
    }else{
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

  PagePrevius(condicion){
    if (condicion) {
      this.page--;
      this.GetList(this.page,this.filter);
    }
  }

  GetList(pagina,filtro) {
    this.subcription = this.listhistoryusersService.getHistoryUserList(pagina,filtro).
    subscribe(( objeto ) => { this.formList(objeto); });
  } 

  
}
