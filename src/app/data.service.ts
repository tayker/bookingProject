import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: User[] = [];
  constructor() { }

  addUser(name, surname, password, phone, email, userType, city){
    this.users.push(new User(name, surname, password, phone, email, userType, city));
    console.log(this.users);
  }
}
