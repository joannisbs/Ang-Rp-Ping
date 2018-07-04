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
import { NewuserComponent } from './newuser/newuser.component';
import { NewmoduleComponent } from './newmodule/newmodule.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrersComponent,
    children: [
      { path: 'newempresa', component: NewcompanyComponent },
      { path: 'newmodulo', component: NewmoduleComponent },
      { path: 'newrelogio', component: NewrepComponent },
      { path: 'newequipamento', component: NewequipComponent },
      { path: 'newusuarios', component: NewuserComponent },
      { path: 'newclientes', component: NewclientesComponent },
      { path: 'editequipamento', component: NewequipComponent },
      { path: 'editusuarios', component: EdituserComponent },
      { path: 'editclientes', component: EditclientesComponent },
      { path: 'editempresa', component: EditcompanyComponent },
      { path: 'editrelogio', component: EditrepComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
