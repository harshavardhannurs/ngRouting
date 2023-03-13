import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [];

  constructor(private usersService:UsersService){}

  ngOnInit(){
    this.users = this.usersService.getUsers();
  }
}
