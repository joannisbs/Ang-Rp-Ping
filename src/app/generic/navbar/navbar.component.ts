import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public idNav = null;
  public user_name = 'João';

  constructor() { }

  ngOnInit() { }

  mouseLeave() {
    this.idNav = null;
  }

  clickDropdpown(idClik) {
    this.idNav = idClik;
  }

}
