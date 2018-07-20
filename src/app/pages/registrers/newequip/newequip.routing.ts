import { NewequipComponent } from './newequip.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { SuportGuard } from '../../../routesguards/suport.guard';
import { ExpedicaoGuard } from '../../../routesguards/expedicao.guard';
import { ProjetoGuard } from '../../../routesguards/projeto.guard';


const routes: Routes = [
  {
    path: '',
    component: NewequipComponent,
    canActivate:[AuthGuard,
                  SuportGuard,
                  ExpedicaoGuard,
                  ProjetoGuard] ,
    
  }
];

export const routing = RouterModule.forChild(routes);
