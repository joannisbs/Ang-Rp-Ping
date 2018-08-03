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

  public tittle = "Lista de usuários ativos";
  public Dtittle = "Lista de usuários desativados"

  public button = "Vizualizar usuários desativos";
  public dbutton = "Vizualizar usuários ativos";

  public desativos = false;

  private listuserfilters: GetListUserInteface = new GetListUserInteface;

  constructor(private listusersService: ListusersService) {

    this.GetList(1, "all");
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }



  EditUser(i) {
    if (i === this.editar){
      this.editar = 0;
    }else{
    this.editar = i;
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
    this.ctl_acoes = i;
  }

  ReactiveUser(index) {
    const ids = this.lists[index][0];
    this.subcription = this.listusersService
      .ReativarConta(ids)
      .subscribe(response_server => {
        this.subcription.unsubscribe();
        const sucess = this.listusersService.ValidateDesactive(response_server);
        if (sucess) {
          alert("Usuário " + this.lists[index][1] + " foi reativado!");
        } else {
          alert("Ocorreu um erro desconhecido.");
        }
        this.GetList(this.page, this.filter);

      });
  }

  DeleteUser(index) {
    const ids = this.lists[index][0];
    this.subcription = this.listusersService
      .DesativarConta(ids)
      .subscribe(response_server => {
        this.subcription.unsubscribe();
        const sucess = this.listusersService.ValidateDesactive(response_server);
        if (sucess) {
          alert("Usuário " + this.lists[index][1] + " foi desativado!");
        } else {
          alert("Ocorreu um erro desconhecido.");
        }

        this.GetList(this.page, this.filter);

      });
  }
  VerDesativos() {
    const name = this.tittle;
    this.tittle = this.Dtittle;
    this.Dtittle = name;
    const ativo = this.button;
    this.button = this.dbutton;
    this.dbutton = ativo;
    this.desativos = !this.desativos;
    this.lists = [];
    this.GetList(1, "all");

  }
  ResetSenha(index) {
    const ids = this.lists[index][0];
    this.subcription = this.listusersService
      .ResetarSenha(ids)
      .subscribe(response_server => {
        this.subcription.unsubscribe();
        const sucess = this.listusersService.ValidateDesactive(response_server);
        if (sucess) {
          alert("Usuário " + this.lists[index][1] + " teve sua senha resetada!");
        } else {
          alert("Ocorreu um erro desconhecido.");
        }
        this.editar = 0;
    

      });
  }
  Saves(index, valor) {
    if (valor != '') {
      let person: personOfListUsersInterface = new personOfListUsersInterface;
      person.ids = this.lists[index][0];
      person.type = valor;
      person.user = this.lists[index][1];
      this.subcription = this.listusersService
        .AlterarTipoConta(person)
        .subscribe(response_server => {
          
          const sucess = this.listusersService.ValidateDesactive(response_server);
          if (sucess) {
            alert("Usuário " + this.lists[index][1] + " foi alterado!");
          } else {
            alert("Ocorreu um erro desconhecido.");
          }
          this.subcription.unsubscribe();
          this.editar = 0;
          this.GetList(this.page, this.filter);

        });
    }
  }


  formList(info) {
    const sizeof: sizeoflistofuserInterface = info[0];
    const peaples = info[1];
    let peaple: personOfListUsersInterface;
    this.contage = String(Number(sizeof.initpag) + 1) + "-" +
      String(sizeof.endpag) + " de " + String(sizeof.size) + " usuários";
    if (sizeof.next === '1') {
      this.nextpage = true;
    }
    else {
      this.nextpage = false;
    }

    //this.lists = info.slice(1);
    this.lists = [];
    for (let i = 0; i < peaples.length; i++) {
      peaple = peaples[i];
      switch (peaple.type) {
        case '7':
          peaple.type = 'suporte';
          break;
        case '5':
          peaple.type = 'Expedição';
          break;
        case '4':
          peaple.type = 'Projetos';
          break;
        case '3':
          peaple.type = 'Módulo';
          break;
        case '2':
          peaple.type = 'Mod.Proj';
          break;
        case '1':
          peaple.type = 'Administrador';
          break;
      }
      this.lists.push([peaple.ids, peaple.user, peaple.type]);

    }
  }

  History(index) {
    const iddousuario = this.lists[index][0];
    const user = this.lists[index][1];
    this.listusersService.setIDdoUser(iddousuario,user);
  }

  Search(valor) {
    if (valor == '') {
      this.filter = 'all';
    } else {
      this.filter = valor;
      this.page = 1;
    }
    this.GetList(this.page, this.filter);;
  }

  PageNext(condicion) {
    if (condicion) {
      this.page++;
      this.GetList(this.page, this.filter);
    }

  }

  PagePrevius(condicion) {
    if (condicion) {
      this.page--;
      this.GetList(this.page, this.filter);
    }
  }

  GetList(pagina, filtro) {
    this.lists = [];
    this.listuserfilters.page = pagina;
    this.listuserfilters.filtro = filtro;

    this.subcription = this.listusersService.getList_Server(this.listuserfilters, this.desativos).
      subscribe((response) => {
        this.subcription.unsubscribe();
        const listusers = this.listusersService.ValidateList(response);
        this.formList(listusers);
      });
  }


}


