import { Routes, RouterModule } from '@angular/router';
import { NewrequisitionComponent } from './newrequisition.component';


const routes: Routes = [
  {
    path: '',
    component: NewrequisitionComponent
    
  }
];

export const routing = RouterModule.forChild(routes);
