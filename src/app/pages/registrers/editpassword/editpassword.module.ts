import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditpasswordComponent } from 'src/app/pages/registrers/editpassword/editpassword.component';
import { routingEditPassword } from 'src/app/pages/registrers/editpassword/editpassword.routing';

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


