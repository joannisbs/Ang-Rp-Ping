import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListhistoryusersComponent } from './listhistoryusers.component';
import { routingListhitoryusers } from './listhistoryusers.routing';


@NgModule({
  imports: [
    CommonModule,
    routingListhitoryusers
  ],
  declarations: [ListhistoryusersComponent]
})
export class ListhistoryusersModule { }
