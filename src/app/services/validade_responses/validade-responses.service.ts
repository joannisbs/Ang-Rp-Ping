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
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: 0 )");
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
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: 1 )");
        break;

      default:
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: errofrontdefault " + response_server + " )");
        break;
    }
    return false;
  }

  ValidateAction ( response_server ){

    switch ( response_server ){
      
      case 1: // sucesso
        return 1;
      
      case 0: 
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: 2 )");
        break;
      
      
      case 2:
        return 2;
      
      case 3:
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: 3 )");
        break;

      case 4:
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: 4 )");
        break;
      
      default:
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: errofrontdefault " + response_server + " )");
        break;

    }
    return 3;
  }
  ValidateList ( response_server ){

    switch ( response_server ){
      
      case 1: // sucesso
        return 1;
      
      case 0: 
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: 5 )");
        break;
      
      
      case 2:
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: 6 )");
        break;
      
      case 3:
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: 7 )");
        break;

      case 4:
        return 2;
      
      default:
        alert("Ocorreu um erro desconhecido. ( ValidateErnum: errofrontdefault " + response_server + " )");
        break;

    }
    return 3;
  }
  
}

