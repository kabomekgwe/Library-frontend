import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.name = localStorage.getItem('user');

  }

  logout() {
    this.authService.logout();
  }

}
