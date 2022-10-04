import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonFeatureService } from '../Services/common-feature.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationGuard implements CanDeactivate<unknown> {
  constructor(private _commonservice : CommonFeatureService){}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let useResponse 
      if(this._commonservice.getunchangedChanges()){  // true , false
        useResponse = confirm("Do you wish to continue ?")  // true || false
        return useResponse;

      } 
      else{
        return true;
      }
   
   
     
  }
  
}
