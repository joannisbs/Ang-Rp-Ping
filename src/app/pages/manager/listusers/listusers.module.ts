import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListusersComponent } from './listusers.component';
import { routingListusers } from './listusers.routing';

@NgModule({
  imports: [
    CommonModule,
    routingListusers
  ],
  declarations: [ListusersComponent]
})
export class ListusersModule { }
