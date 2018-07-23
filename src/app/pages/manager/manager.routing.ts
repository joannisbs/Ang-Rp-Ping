import { ProjetoGuard } from '../../routesguards/projeto.guard';
import { ExpedicaoGuard } from '../../routesguards/expedicao.guard';
import { ModuloProjetoGuard } from '../../routesguards/modulo_projeto.guard';
import { ModuloGuard } from '../../routesguards/modulo.guard';
import { SuportGuard } from '../../routesguards/suport.guard';
import { AuthGuard } from '../../routesguards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.components';




const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'listusers', 
        loadChildren: 'src/app/pages/manager/listusers/listusers.module#ListusersModule',
        canActivate:[AuthGuard,
                      SuportGuard,
                      ModuloGuard,
                      ModuloProjetoGuard,
                      ExpedicaoGuard,
                      ProjetoGuard] ,
      },
    ]
  }
];

export const routingManager = RouterModule.forChild(routes);
