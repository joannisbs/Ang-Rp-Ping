import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListusersService } from '../../../services/user/listusers.service'
import { GetListUserInteface, sizeoflistofuserInterface, personOfListUsersInterface } from 'src/app/models/user/user';

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
  public ctl_save = false;
  public ctl_resetsenha = false;

  public contage = ''

  public nextpage = false;
  public page = 1;
  public filter = "all";

  public editar = 0;
  

  private listuserfilters: GetListUserInteface = new GetListUserInteface;

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


 
  EditUser(i) {
    this.editar = i;
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


  DeleteUser(idex){
    const ids = this.lists[idex][0];
    this.subcription = this.listusersService
      .DesativarConta(ids)
      .subscribe(res => {
        if (res == true) {
            alert("Usuário " + this.lists[idex][1] + " foi desativado!");
        }else {
          alert("Ocorreu um erro desconhecido.");
        }
        this.GetList(this.page,this.filter);
        
      });
  }

  ResetSenha(i) {
    
  }
  Saves(i) {
    
  }

  formList(info) {
    const sizeof:sizeoflistofuserInterface = info[0];
    const peaples = info[1];
    let peaple:personOfListUsersInterface;
    this.contage = String(Number(sizeof.initpag)+1) + "-" + 
                    String(sizeof.endpag) + " de " + String(sizeof.size) + " usuários";
    if (sizeof.next==='1') {
      this.nextpage = true;
    }
    else {
      this.nextpage = false;
    }

    //this.lists = info.slice(1);
    for (let i=0; i < peaples.length; i++) {
      peaple = peaples[i];
      switch (peaple.type) {
        case '7':
          peaple.type ='suporte';
          break;
        case '5':
           peaple.type ='Expedição';
          break;
        case '4':
           peaple.type ='Projetos';
          break;
        case '3':
           peaple.type ='Módulo';
          break;
        case '2':
           peaple.type ='Mod.Proj';
          break;
        case '1':
           peaple.type ='Administrador';
          break;
      }
      this.lists.push([peaple.ids, peaple.user, peaple.type]);

    }
  }

  History(index) {
    const iddousuario = this.lists[index][0];
    this.listusersService.setIDdoUser(iddousuario);
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
    this.listuserfilters.page = pagina;
    this.listuserfilters.filtro = filtro;

    this.subcription = this.listusersService.getList_Server(this.listuserfilters).
    subscribe(( response ) => { 
      this.subcription.unsubscribe();
      const listusers = this.listusersService.ValidateList(response);
      this.formList(listusers); });
  } 

  
}



