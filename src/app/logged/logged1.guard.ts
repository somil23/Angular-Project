import { LoginComponent } from './../login/login.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedService } from './logged.service';

@Injectable({
  providedIn: 'root'
})
export class Logged1Guard implements CanActivate {
 
 constructor(private logService:LoggedService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let user=this.logService.isLogged();
      console.log(user);
      if(user)

      {
        return true;
      }
      else{
        this.router.navigate(['/login']);
      }
      return false;
  }
  
}
