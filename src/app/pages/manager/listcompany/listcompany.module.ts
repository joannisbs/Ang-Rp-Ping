import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingListcompany } from 'src/app/pages/manager/listcompany/listcompany.routing';
import { ListcompanyComponent } from 'src/app/pages/manager/listcompany/listcompany.component';

@NgModule({
  imports: [
    CommonModule,
    routingListcompany
  ],
  declarations: [ListcompanyComponent]
})
export class ListcompanyModule { }
