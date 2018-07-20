import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './newuser.component';


const routes: Routes = [
  {
    path: '',
    component: NewuserComponent
    
  }
];

export const routing = RouterModule.forChild(routes);
