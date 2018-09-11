import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingChipList } from 'src/app/pages/manager/listchip/listchip.routing';
import { ListChipComponent } from 'src/app/pages/manager/listchip/listchip.component';

@NgModule({
  imports: [
    CommonModule,
    routingChipList
  ],
  declarations: [
    ListChipComponent,
  ]
})
export class ListChipModule { }
