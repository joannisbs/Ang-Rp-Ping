import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { SuportGuard } from '../../../routesguards/suport.guard';
import { ModuloGuard } from '../../../routesguards/modulo.guard';
import { ModuloProjetoGuard } from '../../../routesguards/modulo_projeto.guard';
import { ExpedicaoGuard } from '../../../routesguards/expedicao.guard';
import { ProjetoGuard } from '../../../routesguards/projeto.guard';
import { NewmoduleComponent } from 'src/app/pages/registrers/newmodule/newmodule.component';


const routes: Routes = [
  {
    path: '',
    component: NewmoduleComponent,
    canActivate:[AuthGuard,
                  SuportGuard,
                  ModuloGuard,
                  ModuloProjetoGuard,
                  ExpedicaoGuard,
                  ProjetoGuard] ,
    
  }
];

export const routing = RouterModule.forChild(routes);
