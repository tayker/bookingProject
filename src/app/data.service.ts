import { Injectable } from '@angular/core';
import { User } from './user';
import { Goods } from './goods';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: User[] = [];
  private goodsList = [
    { title: 'Big house in the middle of the city', landlord: 'Petro', date: '22.02.2018 - 22.05.2018', address: 'Kiev', price: 1390, description: 'Some description', gallery: [ 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150'] },
    { title: 'Big house in the middle of the city', landlord: 'Petro', date: '22.02.2018 - 22.05.2018', address: 'Kiev', price: 1390, description: 'Some description', gallery: [ 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150'] },
    { title: 'Big house in the middle of the city', landlord: 'Petro', date: '22.02.2018 - 22.05.2018', address: 'Kiev', price: 1390, description: 'Some description', gallery: [ 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150'] },
    { title: 'Big house in the middle of the city', landlord: 'Petro', date: '22.02.2018 - 22.05.2018', address: 'Kiev', price: 1390, description: 'Some description', gallery: [ 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150'] }
  ];
  constructor(private ls: LoginService,
              private http: HttpClient) { }

  addUser(name, surname, password, phone, email, userType, city) {
    this.users.push(new User(name, surname, password, phone, email, userType, city));
    this.ls.userRegister(this.users);
  }
  getGoodsList() {
    return this.goodsList;
  }
}
