import { Routes, RouterModule } from '@angular/router';
import { RegistrersComponent } from './registrers.components';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { EditrepComponent } from './editrep/editrep.component';
import { CreateequipComponent } from './createequip/createequip.component';
import { EditclientesComponent } from './editclientes/editclientes.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrersComponent,
    children: [
      { path: 'empresa', component: EditcompanyComponent },
      { path: 'relogio', component: EditrepComponent },
      { path: 'equipamento', component: CreateequipComponent },
      { path: 'usuarios', component: EdituserComponent },
      { path: 'clientes', component: EditclientesComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
