import { AuthService } from './services/login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar [showNav]='showNav'></app-navbar>
    <router-outlet></router-outlet>`,
})
export class AppComponent {

  showNav: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.showNavEmmt.subscribe(
      show => this.showNav = show

    );
  }

 }
