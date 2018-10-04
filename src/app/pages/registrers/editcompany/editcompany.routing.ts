import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { SuportGuard } from '../../../routesguards/suport.guard';
import { ExpedicaoGuard } from '../../../routesguards/expedicao.guard';
import { ProjetoGuard } from '../../../routesguards/projeto.guard';
import { EditcompanyComponent } from 'src/app/pages/registrers/editcompany/editcompany.component';

const routes: Routes = [
  {
    path: '',
    component: EditcompanyComponent,
    canActivate:[AuthGuard,
                  SuportGuard,
                  ExpedicaoGuard,
                  ProjetoGuard] ,
    
  }
];

export const routing = RouterModule.forChild(routes);
