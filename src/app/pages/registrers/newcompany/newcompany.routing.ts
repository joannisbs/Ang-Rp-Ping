import { Routes, RouterModule } from '@angular/router';
import { NewcompanyComponent } from './newcompany.component';
import { AuthGuard } from 'src/app/routesguards/auth.guard';
import { SuportGuard } from 'src/app/routesguards/suport.guard';
import { ExpedicaoGuard } from 'src/app/routesguards/expedicao.guard';
import { ProjetoGuard } from 'src/app/routesguards/projeto.guard';


const routes: Routes = [
  {
    path: '',
    component: NewcompanyComponent,
    canActivate:[AuthGuard,
                  SuportGuard,
                  ExpedicaoGuard,
                  ProjetoGuard] ,
    
  }
];

export const routing = RouterModule.forChild(routes);
