import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingListhitoryChip } from 'src/app/pages/manager/listhistorychip/listhistorychip.routing';
import { ListhistorychipComponent } from 'src/app/pages/manager/listhistorychip/listhistorychip.component';

@NgModule({
  imports: [
    CommonModule,
    routingListhitoryChip
  ],
  declarations: [
    ListhistorychipComponent
  ]
})
export class ListhistoryChipModule { }
