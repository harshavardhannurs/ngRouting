import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from 'src/app/services/servers.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{

  server:{id:number, name:string, status:string};
  id:number;
  // paramsSubscription:Subscription;

  constructor(private serversService:ServersService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    // this.id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServerById(this.id);
    // this.paramsSubscription = this.route.params.subscribe(
    //   (params:Params)=>{
    //     this.server = this.serversService.getServerById(+params['id']);
    //   }
    // )
    this.route.data.subscribe(
      (data:Data) =>{
        this.server = data['server'];
      }
    )
  }

  // ngOnDestroy(){
  //   this.paramsSubscription.unsubscribe();
  // }

  openEditPortal(){
    this.router.navigate(['/servers', this.server.id, 'edit'], {queryParamsHandling:'preserve'})
  }
}
