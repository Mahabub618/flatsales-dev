import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: any) {
    console.log("authUser", user);
    let UserArray = [];
    if(localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users') || "[]");
    }
    return UserArray.find((data: { userName: any; password: any; }) => data.userName === user.userName && data.password === user.password);
  }
}
