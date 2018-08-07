import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/login/auth.service';
import { ListusersService } from '../../services/user/listusers.service';
import { ListhistoryusersComponent } from '../../pages/manager/listhistoryusers/listhistoryusers.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input()
  showNav;
  
  @Input()
  nivel;

  public idNav = null;
  public user_name = 'User';
  public url_icon = '/assets/icons/menuwhite.png';
  url_icon2 = '/assets/icons/xwhite.png';

  constructor(private listusersService: ListusersService,
   ) { }

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
  MyNavhistory() {
    this.listusersService.myhistory();
    
  }

}
