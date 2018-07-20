// imports do angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imports de guadas
import { AuthGuard } from '../routesguards/auth.guard';

//imports de componentes
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages.component';


export const routes: Routes = [
  {
    
    path: 'pages',
      component: PagesComponent, 
      children: 
      [
        
        { path: '', redirectTo: 'login', pathMatch: 'full' },


        { path: 'login', component: LoginComponent },
        

        { path: 'monitor', 
            loadChildren:'./monitor/monitor.module#MonitorModule',
            canActivate:[AuthGuard]},


        { path: 'register', 
            loadChildren: './registrers/registrers.module#RegistrersModule',
            canActivate:[AuthGuard]}
      ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
