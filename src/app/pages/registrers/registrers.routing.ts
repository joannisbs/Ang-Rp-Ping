// Imports do angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports de components
import { RegistrersComponent } from './registrers.components';


const routes: Routes = [
  {
    path: '',
    component: RegistrersComponent,
    children: 
    [
      {
        path: 'newusuarios', 
        loadChildren: 'src/app/pages/registrers/newuser/newuser.module#NewUserModule'
      },
      { 
        path: 'newreq', 
        loadChildren: 'src/app/pages/registrers/newrequisition/newrequisition.module#NewRequisitionModule'
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

