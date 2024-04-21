import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userService: UserService = inject(UserService);

  isLogged: boolean = false;

  constructor() { }

  login(username: string, password: string){
    let user = this.userService.users.find((u) => u.username === username && u.password === password);
    
    if(user === undefined){
      this.isLogged=false;
    } else{
      this.isLogged = true;
    }
    return user;
  }

  logout(){
    this.isLogged = false;
  }

  isAuthenticated(){
    return this.isLogged;
  }
}
