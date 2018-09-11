import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditpasswordComponent } from './editpassword.component';
import { routingEditPassword } from './editpassword.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routingEditPassword,
    
  ],
  declarations: [
    EditpasswordComponent
  ]
})
export class EditpasswordModule { }


