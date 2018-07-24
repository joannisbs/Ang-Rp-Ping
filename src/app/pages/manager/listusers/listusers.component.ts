import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListusersService } from '../../../services/user/listusers.service'

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

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

  constructor( private listusersService: ListusersService) { 
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
                    String(info[0][1]) + " de " + String(info[0][2]) + " usuários";
    if (info[0][3]==='1') {
      this.nextpage = true;
    }
    else {
      this.nextpage = false;
    }

    this.lists = info.slice(1);
    for (let i=0; i < this.lists.length; i++) {
      const valor = this.lists[i][2];
      switch (valor) {
        case '7':
          this.lista.push('suporte');
          break;
        case '5':
          this.lista.push('Expedição');
          break;
        case '4':
          this.lista.push('Projetos');
          break;
        case '3':
          this.lista.push('Módulo');
          break;
        case '2':
          this.lista.push('Mod.Proj');
          break;
        case '1':
          this.lista.push('Administrador');
          break;

      }

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
    this.subcription = this.listusersService.getList(pagina,filtro).
    subscribe(( objeto ) => { this.formList(objeto); });
  } 

  
}



