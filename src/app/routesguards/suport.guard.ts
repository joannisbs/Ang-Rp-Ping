import { AuthService } from '../services/login/auth.service';
import { Observable } from 'rxjs';
import { routes } from '../app.routing';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SuportGuard implements CanActivate{


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable <boolean> | boolean{
      if (this.authService.getNivel()===7){
        return true;
      }
      //this.router.navigate(['/registers'])
      //return false;
  }

}
