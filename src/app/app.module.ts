import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GenericModule } from './generic/generic.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { routing } from './app.routing';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericModule,
    PagesModule,
    FormsModule,
    RouterModule,
    ServicesModule,
    routing
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
