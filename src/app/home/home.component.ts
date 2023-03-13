import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService:AuthService){}

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
