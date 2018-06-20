import { GenericModule } from './generic/generic.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
