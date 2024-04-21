import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { IDeactivateComponent } from '../interfaces/deactivate.interface';
import { Course } from '../Models/course';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGauardServiceService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent>, Resolve<Course[]>{
  authService: AuthService = inject(AuthService);
  courseService: CourseService = inject(CourseService);
  router: Router = inject(Router);
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      if(this.authService.isAuthenticated()){
        return true;
      } else {
        this.router.navigate(['/Login']);
        return false;
      }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>  {
      return this.canActivate(childRoute, state);
  }

  canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return component.canExit();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Course[]> {
    return this.courseService.getAllcourses();
  }
}
