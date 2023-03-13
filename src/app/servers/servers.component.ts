import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  servers = [];

  constructor(private serversService:ServersService, private router:Router){}

  ngOnInit(){
    this.servers = this.serversService.getServers();
  }

}
