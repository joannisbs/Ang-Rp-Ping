import { Routes, RouterModule } from '@angular/router';
import { NewrequisitionComponent } from './newrequisition.component';
import { AuthGuard } from 'src/app/routesguards/auth.guard';
import { ExpedicaoGuard } from 'src/app/routesguards/expedicao.guard';
import { ProjetoGuard } from 'src/app/routesguards/projeto.guard';


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
