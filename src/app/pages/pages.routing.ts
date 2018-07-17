import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', loadChildren: './registrers/registrers.module#RegistrersModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
