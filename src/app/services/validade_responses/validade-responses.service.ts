import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidadeResponsesService {

  constructor (
    private router: Router
  ) { }

  ValidateSeccion ( response_server ){

    switch ( response_server ){
      
      case 1: // sucesso
        return true;
      
      case 0: 
        alert("Ocorreu um erro desconhecido. ( ernum: 0 )");
        break;
      
      case 2:
        alert("Sessão inválida, por favor faça login novamente.");
        this.router.navigate(['/login']);
        break;
      
      case 3:
        alert("Sua conta não tem permissão para realizar esta tarefa," +
        +   "\n       por favor contate um administrador.");
        break;
      
      case 4: 
        alert("Ocorreu um erro desconhecido. ( ernum: 1 )");
        break;

      default:
        alert("Ocorreu um erro desconhecido. ( ernum: errofrontdefault " + response_server + " )");
        break;
    }
    return false;
  }

  ValidateAction ( response_server ){

    switch ( response_server ){
      
      case 1: // sucesso
        return 1;
      
      case 0: 
        alert("Ocorreu um erro desconhecido. ( ernum: 2 )");
        break;
      
      
      case 2:
        return 2;
      
      case 3:
        alert("Ocorreu um erro desconhecido. ( ernum: 3 )");
        break;

      case 4:
        alert("Ocorreu um erro desconhecido. ( ernum: 4 )");
        break;
      
      default:
        alert("Ocorreu um erro desconhecido. ( ernum: errofrontdefault " + response_server + " )");
        break;

    }
    return 3;
  }
}

