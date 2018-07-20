
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './newuser.routing';
import { NewuserComponent } from './newuser.component';
import { UserComumFormComponent } from '../components/user-comum-form/user-comum-form.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    NewuserComponent,
    UserComumFormComponent]
})
export class NewUserModule { }
