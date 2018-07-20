import { Routes, RouterModule } from '@angular/router';
import { NewclientesComponent } from './newclientes.component';
import { AuthGuard } from 'src/app/routesguards/auth.guard';
import { SuportGuard } from 'src/app/routesguards/suport.guard';
import { ModuloGuard } from 'src/app/routesguards/modulo.guard';
import { ModuloProjetoGuard } from 'src/app/routesguards/modulo_projeto.guard';
import { ExpedicaoGuard } from 'src/app/routesguards/expedicao.guard';
import { ProjetoGuard } from 'src/app/routesguards/projeto.guard';


const routes: Routes = [
  {
    path: '',
    component: NewclientesComponent,
    canActivate:[AuthGuard,
                  SuportGuard,
                  ModuloGuard,
                  ModuloProjetoGuard,
                  ExpedicaoGuard,
                  ProjetoGuard] ,
    
  }
];

export const routing = RouterModule.forChild(routes);
