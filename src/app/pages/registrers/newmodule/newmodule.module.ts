
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewmoduleComponent } from 'src/app/pages/registrers/newmodule/newmodule.component';
import { routing } from 'src/app/pages/registrers/newmodule/newmodule.routing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    NewmoduleComponent]
})
export class NewModuleModule { }
