import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth-service.service";

@Injectable()

export class ActivateGuard implements CanActivate, CanActivateChild{
  
  constructor(private authService:AuthService, private router:Router){}
  
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
    return this.authService.isAuthenticated()
    .then((isLogged:boolean)=>{
      if(isLogged){
        return true
      }else{
        this.router.navigate(['/'])
        return false;
      }
    })
  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
    return this.canActivate(route, state);
  }

}