import { Routes, RouterModule } from '@angular/router';
import { NewclientesComponent } from '../newclientes/newclientes.component';
import { NewchipComponent } from './newchip.component';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { SuportGuard } from '../../../routesguards/suport.guard';
import { ModuloGuard } from '../../../routesguards/modulo.guard';
import { ExpedicaoGuard } from '../../../routesguards/expedicao.guard';


const routes: Routes = [
  {
    path: '',
    component: NewchipComponent,        
    canActivate:
      [AuthGuard,
        SuportGuard,
        ModuloGuard,
        ExpedicaoGuard],
    
  }
];

export const routing = RouterModule.forChild(routes);
