import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor( public _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   let  userActive = sessionStorage.getItem('Active')
    if(userActive == 'true'){
      return true;
    }
    else{
      alert("Please login to proceed further")
      this._router.navigate(['login'])
      return false;
    }
    
     
  }
  
}
