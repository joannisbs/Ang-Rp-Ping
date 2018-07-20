import { Routes, RouterModule } from '@angular/router';
import { NewrequisitionComponent } from './newrequisition.component';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { ExpedicaoGuard } from '../../../routesguards/expedicao.guard';
import { ProjetoGuard } from '../../../routesguards/projeto.guard';


const routes: Routes = [
  {
    path: '',
    component: NewrequisitionComponent,
    canActivate:[AuthGuard,
                  ExpedicaoGuard,
                  ProjetoGuard] ,
    
  }
];

export const routing = RouterModule.forChild(routes);
