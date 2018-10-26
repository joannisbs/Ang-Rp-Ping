import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListhistoryempComponent } from './listhistoryemp.component';
import { routingListhitoryEmp } from 'src/app/pages/manager/listhistoryemp/listhistoryemp.routing';

@NgModule({
  imports: [
    CommonModule,
    routingListhitoryEmp
  ],
  declarations: [
    ListhistoryempComponent
  ]
})
export class ListhistoryempModule { }
