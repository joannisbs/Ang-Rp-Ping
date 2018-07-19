import { AuthService } from './../services/login/auth.service';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../routesguards/auth.guard';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      
      { path: 'register', 
          loadChildren: './registrers/registrers.module#RegistrersModule',
          canActivate:[AuthGuard]}
          
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
