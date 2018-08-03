import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { SuportGuard } from '../../../routesguards/suport.guard';
import { ModuloGuard } from '../../../routesguards/modulo.guard';
import { ModuloProjetoGuard } from '../../../routesguards/modulo_projeto.guard';
import { ExpedicaoGuard } from '../../../routesguards/expedicao.guard';
import { ProjetoGuard } from '../../../routesguards/projeto.guard';
import { ListhistoryusersComponent } from 'src/app/pages/manager/listhistoryusers/listhistoryusers.component';
import { GerarPDFComponent } from 'src/app/pages/manager/listhistoryusers/gerarPDF/gerar-pdf/gerar-pdf.component';

const routes: Routes = [
  {
    path: '',
    component: ListhistoryusersComponent,
    canActivate:[AuthGuard,
                  SuportGuard,
                  ModuloGuard,
                  ModuloProjetoGuard,
                  ExpedicaoGuard,
                  ProjetoGuard] ,
    
  },
  {
    path: 'GeraPDF',
    component: GerarPDFComponent,
    canActivate:[AuthGuard,
                  SuportGuard,
                  ModuloGuard,
                  ModuloProjetoGuard,
                  ExpedicaoGuard,
                  ProjetoGuard] ,
    
  }
];

export const routingListhitoryusers = RouterModule.forChild(routes);
