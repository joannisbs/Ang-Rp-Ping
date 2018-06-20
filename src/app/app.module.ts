import { GenericModule } from './generic/generic.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegistrersModule } from './pages/registrers/registrers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericModule,
    RegistrersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
