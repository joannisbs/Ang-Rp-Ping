import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../routesguards/auth.guard';
import { EditpasswordComponent } from 'src/app/pages/registrers/editpassword/editpassword.component';


const routes: Routes = [
  {
    path: '',
    component: EditpasswordComponent,
    canActivate:[AuthGuard] ,
    
  }
];

export const routingEditPassword = RouterModule.forChild(routes);
