import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';

import { ListhistoryusersComponent } from './listhistoryusers.component';

const routes: Routes = [
  {
    path: '',
    component: ListhistoryusersComponent,
    canActivate:[AuthGuard] ,
    
  }
];

export const routingListhitoryusers = RouterModule.forChild(routes);
