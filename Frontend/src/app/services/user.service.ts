import { Injectable } from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: User) {
    let users = [];
    users = JSON.parse(localStorage.getItem('Users') || "[]");
    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
