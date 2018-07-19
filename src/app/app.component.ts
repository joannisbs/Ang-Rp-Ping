import { AuthService } from './services/login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar [showNav]='showNav' [nivel]='nivel'></app-navbar>
    <router-outlet></router-outlet>`,
})
export class AppComponent {

  showNav: boolean = false;
  public nivel;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.showNavEmmt.subscribe(
      show => this.showNav = show
    );
    this.authService.nivelEmmt.subscribe(
      nivel => this.nivel = nivel
    )
  }

 }
