import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  isRegistered: boolean = false;

  setRegistration(status:boolean){
    this.isRegistered = status;
  }

  getRegistration(){
    return this.isRegistered;
  }
}
