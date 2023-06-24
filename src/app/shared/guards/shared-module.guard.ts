import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class SharedModuleGuard implements CanLoad {
  
  constructor(private regiService: RegistrationService){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isRegistered = this.regiService.getRegistration()
    return isRegistered;
  }
}
