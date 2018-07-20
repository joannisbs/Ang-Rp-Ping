import { NewequipComponent } from './newequip.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './newequip.routing';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    NewequipComponent]
})
export class NewEquipModule { }
