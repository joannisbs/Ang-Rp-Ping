import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from './monitor.components';
import { VisaoGeralComponent } from './visao-geral/visao-geral.component';


const routes: Routes = [
  {
    path: '',
    component: MonitorComponent,
    children: [
      { path: 'visaogeral', component: VisaoGeralComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
