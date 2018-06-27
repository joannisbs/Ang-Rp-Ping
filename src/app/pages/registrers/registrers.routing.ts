import { Routes, RouterModule } from '@angular/router';
import { RegistrersComponent } from './registrers.components';
import { EditcompanyComponent } from './editcompany/editcompany.component';
import { EditrepComponent } from './editrep/editrep.component';
import { EditclientesComponent } from './editclientes/editclientes.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NewrepComponent } from './newrep/newrep.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { NewclientesComponent } from './newclientes/newclientes.component';
import { NewequipComponent } from './newequip/newequip.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrersComponent,
    children: [
      { path: 'newempresa', component: NewcompanyComponent },
      { path: 'editempresa', component: EditcompanyComponent },
      { path: 'newrelogio', component: NewrepComponent },
      { path: 'editrelogio', component: EditrepComponent },
      { path: 'newequipamento', component: NewequipComponent },
      { path: 'newusuarios', component: EdituserComponent },
      { path: 'newclientes', component: NewclientesComponent },
      { path: 'editequipamento', component: NewequipComponent },
      { path: 'editusuarios', component: EdituserComponent },
      { path: 'editclientes', component: EditclientesComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
