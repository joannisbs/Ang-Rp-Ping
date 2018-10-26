import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { ListhistoryempComponent } from 'src/app/pages/manager/listhistoryemp/listhistoryemp.component';


const routes: Routes = [
  {
    path: '',
    component: ListhistoryempComponent,
    canActivate:[AuthGuard] ,
    
  }
];

export const routingListhitoryEmp = RouterModule.forChild(routes);
