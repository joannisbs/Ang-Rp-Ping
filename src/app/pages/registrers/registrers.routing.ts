import { Routes, RouterModule } from '@angular/router';
import { RegistrersComponent } from './registrers.components';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { EditrepComponent } from './editrep/editrep.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrersComponent,
    children: [
      { path: 'novo', component: EditcompanyComponent },
      { path: 'editar', component: EditrepComponent },
      { path: 'geerenciar', component: EditcompanyComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
