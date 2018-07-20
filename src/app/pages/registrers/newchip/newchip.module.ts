
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewchipComponent } from 'src/app/pages/registrers/newchip/newchip.component';
import { routing } from 'src/app/pages/registrers/newchip/newchip.routing';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    NewchipComponent]
})
export class NewChipModule { }
