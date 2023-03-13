import { NgModule } from "@angular/core";
import { Routes, RouterModule, } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { ActivateGuard } from "./services/activate-guard.service";
import { DeactivateGuard } from "./services/deactivate-guard.service";
import { Resolver } from "./services/resolver.service";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'servers', 
  // canActivate:[ActivateGuard] ,
  canActivateChild:[ActivateGuard],
  component:ServersComponent, children:[
    {path:':id', resolve:{server:Resolver}, component:ServerComponent},
    {path:':id/edit', canDeactivate:[DeactivateGuard], component:EditServerComponent}
  ]},
  {path:'users', component:UsersComponent, children:[
    {path:':id/:name', component:UserComponent}
  ]},
  {path:'**', component:ErrorComponent, data:{message:'404 Page Not Found :('}}
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}