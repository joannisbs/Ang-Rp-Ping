import { ProjetoGuard } from '../../routesguards/projeto.guard';
import { ExpedicaoGuard } from '../../routesguards/expedicao.guard';
import { ModuloProjetoGuard } from '../../routesguards/modulo_projeto.guard';
import { ModuloGuard } from '../../routesguards/modulo.guard';
import { SuportGuard } from '../../routesguards/suport.guard';
// Imports do angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports de components
import { RegistrersComponent } from './registrers.components';
import { AuthGuard } from '../../routesguards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: RegistrersComponent,
    children: 
    [
      {
        path: 'newusers', 
        loadChildren: 'src/app/pages/registrers/newuser/newuser.module#NewUserModule',
        canActivate:[AuthGuard,
                      SuportGuard,
                      ModuloGuard,
                      ModuloProjetoGuard,
                      ExpedicaoGuard,
                      ProjetoGuard] ,
      },
      {
        path: 'editpass', 
        loadChildren: 'src/app/pages/registrers/editpassword/editpassword.module#EditpasswordModule',
        //canActivate:[AuthGuard] ,
      },
      {
        path: 'newchip', 
        loadChildren: 'src/app/pages/registrers/newchip/newchip.module#NewChipModule',
        canActivate:[AuthGuard,
                      SuportGuard,
                      ModuloGuard,
                      ExpedicaoGuard],
      },
      // { 
      //   path: 'newreq', 
      //   loadChildren: 'src/app/pages/registrers/newrequisition/newrequisition.module#NewRequisitionModule'
      // }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

