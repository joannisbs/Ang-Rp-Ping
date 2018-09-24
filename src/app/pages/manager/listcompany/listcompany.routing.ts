import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { ListcompanyComponent } from 'src/app/pages/manager/listcompany/listcompany.component';


const routes: Routes = [
  {
    path: '',
    component: ListcompanyComponent,
    canActivate:[AuthGuard] ,
    
  }
];

export const routingListcompany = RouterModule.forChild(routes);
