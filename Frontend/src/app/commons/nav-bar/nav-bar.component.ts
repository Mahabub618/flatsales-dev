import { Component } from '@angular/core';
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  userName: string | undefined;
  constructor(private alertify: AlertifyService) {
  }
  loggedIn() {
    this.userName = localStorage.getItem('token') || '';
    return this.userName;
  }
  onLogOut() {
    localStorage.removeItem('token');
    this.alertify.success("Logout Successful");
  }
}
