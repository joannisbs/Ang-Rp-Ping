import { Routes, RouterModule } from '@angular/router';

import { RegistrersComponent } from './registrers.components';
import { ModuleWithProviders } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: RegistrersComponent,
    children: [

      { path: 'newusuarios', loadChildren: 'src/app/pages/registrers/newuser/newuser.module#NewUserModule'},
      { path: 'newreq', loadChildren: 'src/app/pages/registrers/newrequisition/newrequisition.module#NewRequisitionModule'}
    
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

