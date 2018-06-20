import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public idNav = null;
  public user_name = 'João';
  public url_icon = '/assets/icons/menuwhite.png';
  url_icon2 = '/assets/icons/xwhite.png';

  constructor() { }

  ngOnInit() { }

  MenuIcon() {
    const temp = this.url_icon2;
    this.url_icon2 = this.url_icon;
    this.url_icon = temp;
  }

  mouseLeave() {
    this.idNav = null;
  }

  clickDropdpown(idClik) {
    this.idNav = idClik;
  }

}
