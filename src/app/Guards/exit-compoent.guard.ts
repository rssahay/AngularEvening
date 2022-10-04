import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonFeatureService } from '../Services/common-feature.service';

@Injectable({
  providedIn: 'root'
})
export class ExitCompoentGuard implements CanDeactivate<unknown> {

  constructor(private _CommonFeatureService: CommonFeatureService) {

  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userResponse;
    if (this._CommonFeatureService.getuserCHangedValue()) {
      userResponse = confirm("You have unsaved Changes,Do you want to continue?")
      return userResponse;

    }else{
      return true;
    }
   
  }

}
