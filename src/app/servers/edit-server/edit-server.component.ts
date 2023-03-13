import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { CanComponentDeactivate } from 'src/app/services/deactivate-guard.service';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate{

  server:{id:number, name:string, status:string}
  id:number;
  @ViewChild('status') status:ElementRef;
  allowEdit:string;
  isUpdated:boolean=false;

  constructor(private route:ActivatedRoute, private serversService:ServersService, private router:Router){}

  ngOnInit(){
    this.id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServerById(this.id);
    this.route.params.subscribe(
      (params:Params)=>{
        this.server = this.serversService.getServerById(+params['id']);
      }
    )
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'];
    this.route.queryParams.subscribe(
      (queryParams:Params) =>{
        this.allowEdit = queryParams['allowEdit']
      }
    )
  }

  editServer(){
    this.serversService.updateServerStatus(this.server.id, this.status.nativeElement.value)
    this.isUpdated = true;
    this.router.navigate(['/servers', this.server.id])
  }

  canExit(){
    if(this.allowEdit === '1'){
      if(!this.isUpdated){
        return confirm('Are you sure you want to go back?');
      }
    }else{
      return true;
    }
  }

}
