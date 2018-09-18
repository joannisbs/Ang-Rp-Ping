import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { ListhistorychipComponent } from 'src/app/pages/manager/listhistorychip/listhistorychip.component';


const routes: Routes = [
  {
    path: '',
    component: ListhistorychipComponent,
    canActivate:[AuthGuard] ,
    
  }
];

export const routingListhitoryChip = RouterModule.forChild(routes);
