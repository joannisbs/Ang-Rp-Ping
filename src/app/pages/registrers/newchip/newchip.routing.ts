import { Routes, RouterModule } from '@angular/router';
import { NewclientesComponent } from '../newclientes/newclientes.component';
import { NewchipComponent } from 'src/app/pages/registrers/newchip/newchip.component';
import { AuthGuard } from 'src/app/routesguards/auth.guard';
import { SuportGuard } from 'src/app/routesguards/suport.guard';
import { ModuloGuard } from 'src/app/routesguards/modulo.guard';
import { ExpedicaoGuard } from 'src/app/routesguards/expedicao.guard';


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
