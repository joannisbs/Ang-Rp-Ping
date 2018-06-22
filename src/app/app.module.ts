import { GenericModule } from './generic/generic.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PagesModule } from 'src/app/pages/pages.module';
import { RouterModule } from '@angular/router';
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
