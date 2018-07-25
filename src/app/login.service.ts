import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login() {
  //  this some important thing
  }
  userRegister(users) {
    localStorage.setItem('user', JSON.stringify(users));
  }
}
