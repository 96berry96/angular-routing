import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('username') username:ElementRef;
  @ViewChild('password') password:ElementRef;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries)=>{
      const logout = queries.get('logout');

      if(logout){
        this.authService.logout();
        alert(`You are now logged out. IsLogged = ${this.authService.isLogged}`);
      }
    })
  }

  OnLoginClicked(){
    let username = this.username.nativeElement.value;
    let password = this.password.nativeElement.value;

    let user = this.authService.login(username, password);

    if(user === undefined){
      alert('The login credentials does not exist')
    }else{
      alert(`Welcome ${user.name}. You are logged in.`);
      this.router.navigate(['\Courses'])
    }
  }

}
