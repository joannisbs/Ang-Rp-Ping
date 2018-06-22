import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    routing
  ],
  declarations: [PagesComponent],
})
export class PagesModule { }
