import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  user:{id:string, name:string}
  id:string;

  constructor(private usersService:UsersService, private route:ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.user = this.usersService.getUserById(this.id);
    this.route.params.subscribe(
      (params:Params) =>{
        this.user = this.usersService.getUserById(params['id']);
      }
    )
  }

}
