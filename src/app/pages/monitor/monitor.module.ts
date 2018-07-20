import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisaoGeralComponent } from './visao-geral/visao-geral.component';
import { routing } from './monitor.routing';
import { HttpModule } from '@angular/http';
import { MonitorComponent } from './monitor.components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    routing
  ],
  declarations: [
    MonitorComponent,
    VisaoGeralComponent]
})
export class MonitorModule { }
