import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';

import { ListChipComponent } from 'src/app/pages/manager/listchip/listchip.component';


const routes: Routes = [
  {
    path: '',
    component: ListChipComponent,
    canActivate:[AuthGuard] ,
    
  }
];

export const routingChipList = RouterModule.forChild(routes);
