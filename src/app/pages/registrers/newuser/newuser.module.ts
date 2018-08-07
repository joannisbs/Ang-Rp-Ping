
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewuserComponent } from './newuser.component';
import { routingnewUser } from './newuser.routing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routingnewUser
  ],
  declarations: [
    NewuserComponent]
})
export class NewUserModule { }
