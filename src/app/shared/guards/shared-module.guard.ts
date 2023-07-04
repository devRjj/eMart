import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class SharedModuleGuard implements CanLoad {
  
  constructor(private regiService: RegistrationService,
    private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isRegistered = this.regiService.getRegistration()
    if(isRegistered){
      return isRegistered;
    }else{
      this.router.navigate(['/login'])
      return isRegistered;
    }
  }
}
